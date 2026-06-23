
export interface BirthDetails {
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  latitude: number;
  longitude: number;
  timezone: number;
  config?: {
    observation_point?: "topocentric" | "geocentric";
    ayanamsha?: "lahiri" | "sayana" | "raman" | "krishnamurti" | "jann-bhasin" | "yukteshwar" | "fagan-bradley";
  };
  settings?: {
    observation_point?: "topocentric" | "geocentric";
    ayanamsha?: "lahiri" | "sayana" | "raman" | "krishnamurti" | "jann-bhasin" | "yukteshwar" | "fagan-bradley";
  };
}

export interface MatchDetails {
  boy: BirthDetails;
  girl: BirthDetails;
}

export interface GeoLocationRequest {
  place: string;
}

export interface GeoLocationResponse {
  statusCode: number;
  output: {
    latitude: number;
    longitude: number;
    timezone: number;
    place: string;
    city: string;
    state: string;
    country: string;
  }[];
}

async function apiRequest<T>(endpoint: string, body: any): Promise<T> {
  const response = await fetch("/api/astrology", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ endpoint, body }),
  });

  if (!response.ok) {
    let errorMessage = `API Error: ${response.statusText}`;
    let statusCode = response.status;
    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorData.message || response.statusText;
    } catch (e) {
      // Keep original statusText error
    }
    const error = new Error(errorMessage) as any;
    error.status = statusCode;
    throw error;
  }

  return response.json() as Promise<T>;
}

export const astrologyApi = {
  getBirthChart: (details: BirthDetails) => 
    apiRequest("planets", details),
  
  getBirthChartSvg: (details: BirthDetails) => 
    apiRequest("horoscope-chart-svg-code", details),

  getMatchMaking: (details: MatchDetails) =>
    apiRequest("match-making/ashtakoot-score", {
      boy_details: details.boy,
      girl_details: details.girl,
    }),

  getGeoLocation: (place: string) =>
    apiRequest<GeoLocationResponse>("geo-location/geo-details", { place }),

  getPanchang: (details: BirthDetails) => 
    apiRequest("panchang", details),
  
  getVimsottariDasas: (details: BirthDetails) => 
    apiRequest("vimsottari/maha-dasas", details),

  getPlanetsExtended: (details: BirthDetails) =>
    apiRequest("planets-extended", details),

  getNavamsaChart: (details: BirthDetails) =>
    apiRequest("navamsa-chart-svg-code", details),

  getD2Chart: (details: BirthDetails) =>
    apiRequest("d2-chart-svg-code", details),

  getD3Chart: (details: BirthDetails) =>
    apiRequest("d3-chart-svg-code", details),

  getD4Chart: (details: BirthDetails) =>
    apiRequest("d4-chart-svg-code", details),

  getD7Chart: (details: BirthDetails) =>
    apiRequest("d7-chart-svg-code", details),

  getD10Chart: (details: BirthDetails) =>
    apiRequest("d10-chart-svg-code", details),

  getD12Chart: (details: BirthDetails) =>
    apiRequest("d12-chart-svg-code", details),

  getD16Chart: (details: BirthDetails) =>
    apiRequest("d16-chart-svg-code", details),

  getD20Chart: (details: BirthDetails) =>
    apiRequest("d20-chart-svg-code", details),

  getD24Chart: (details: BirthDetails) =>
    apiRequest("d24-chart-svg-code", details),

  getD27Chart: (details: BirthDetails) =>
    apiRequest("d27-chart-svg-code", details),

  getD30Chart: (details: BirthDetails) =>
    apiRequest("d30-chart-svg-code", details),

  getD40Chart: (details: BirthDetails) =>
    apiRequest("d40-chart-svg-code", details),

  getD45Chart: (details: BirthDetails) =>
    apiRequest("d45-chart-svg-code", details),

  getD60Chart: (details: BirthDetails) =>
    apiRequest("d60-chart-svg-code", details),
};
