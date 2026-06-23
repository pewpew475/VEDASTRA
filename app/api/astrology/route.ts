import { NextResponse } from 'next/server';

const API_KEY = process.env.FREE_ASTROLOGY_API_KEY;
const BASE_URL = "https://json.freeastrologyapi.com/";

const ALLOWED_ENDPOINTS = new Set([
  "planets",
  "horoscope-chart-svg-code",
  "match-making/ashtakoot-score",
  "geo-location/geo-details",
  "panchang",
  "vimsottari/maha-dasas",
  "planets-extended",
  "navamsa-chart-svg-code",
  "d2-chart-svg-code",
  "d3-chart-svg-code",
  "d4-chart-svg-code",
  "d7-chart-svg-code",
  "d10-chart-svg-code",
  "d12-chart-svg-code",
  "d16-chart-svg-code",
  "d20-chart-svg-code",
  "d24-chart-svg-code",
  "d27-chart-svg-code",
  "d30-chart-svg-code",
  "d40-chart-svg-code",
  "d45-chart-svg-code",
  "d60-chart-svg-code",
]);

// Simple in-memory cache for external API responses
const apiCache = new Map<string, { data: any, timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

async function fetchWithRetry(url: string, options: RequestInit, retries = 3, backoff = 500): Promise<Response> {
  let lastResponse: Response | null = null;
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      lastResponse = response;
      
      // If success, return it
      if (response.ok) return response;
      
      // If it's a 403 (Forbidden)
      if (response.status === 403) {
        const errorData = await response.clone().json().catch(() => ({}));
        // If it's specifically "Missing Authentication Token", it's likely a persistent issue with that endpoint/key
        // so don't waste time retrying.
        if (errorData.message === "Missing Authentication Token") {
          console.log(`Persistent 403 for ${url}, skipping retries.`);
          return response;
        }
        
        console.log(`Intermittent 403 for ${url}, retrying...`);
        await new Promise(resolve => setTimeout(resolve, backoff * (i + 1)));
        continue;
      }
      
      // If it's a 429 (rate limit), retry
      if (response.status === 429) {
        console.log(`Rate limit (429) for ${url}, retrying...`);
        await new Promise(resolve => setTimeout(resolve, backoff * (i + 1)));
        continue;
      }
      
      // For other errors (400, 404, etc.), don't retry and just return the response
      return response;
    } catch (err) {
      console.log(`Fetch error (Retry ${i + 1}/${retries}):`, err);
      if (i === retries - 1) throw err;
      await new Promise(resolve => setTimeout(resolve, backoff * (i + 1)));
    }
  }
  return lastResponse!;
}

export async function POST(request: Request) {
  try {
    const { endpoint, body } = await request.json();

    // Generate cache key based on endpoint and request body
    const cacheKey = `${endpoint}:${JSON.stringify(body)}`;
    
    // Check cache
    const cached = apiCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
      console.log(`Serving cached response for: ${endpoint}`);
      return NextResponse.json(cached.data);
    }

    console.log(`Proxying request to: ${BASE_URL}${endpoint}`);
    console.log(`Request body:`, JSON.stringify(body));

    if (!endpoint) {
      return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 });
    }

    if (!ALLOWED_ENDPOINTS.has(endpoint)) {
      return NextResponse.json({ error: 'Unknown endpoint' }, { status: 400 });
    }

    // Special handling for geo-location/geo-details since it's not working on the external API
    if (endpoint === "geo-location/geo-details") {
      try {
        const place = body.place;
        if (!place) return NextResponse.json({ error: 'Place is required' }, { status: 400 });

        // 1. Get Coordinates from Nominatim (OpenStreetMap)
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=1`, {
          headers: { 'User-Agent': 'VedAstraa/1.0' }
        });
        const geoData = await geoResponse.json();

        if (!geoData || geoData.length === 0) {
          return NextResponse.json({ statusCode: 404, output: [] });
        }

        const { lat, lon, display_name } = geoData[0];
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        // 2. Get Timezone from TimeAPI.io
        const tzResponse = await fetch(`https://www.timeapi.io/api/timezone/coordinate?latitude=${latitude}&longitude=${longitude}`);
        const tzData = await tzResponse.json();
        
        // Convert seconds offset to decimal hours (e.g., 19800 -> 5.5)
        const timezone = tzData.currentUtcOffset.seconds / 3600;

        const result = {
          statusCode: 200,
          output: [{
            latitude,
            longitude,
            timezone,
            place: display_name,
            city: display_name.split(',')[0],
            state: '', // Not easily available in a consistent way from Nominatim without reverse geocoding
            country: display_name.split(',').pop()?.trim() || ''
          }]
        };

        // Cache the result
        apiCache.set(cacheKey, { data: result, timestamp: Date.now() });

        return NextResponse.json(result);
      } catch (err) {
        console.error('Geo fallback error:', err);
        return NextResponse.json({ error: 'Failed to get location details' }, { status: 500 });
      }
    }

    if (!API_KEY) {
      return NextResponse.json({ error: 'Server misconfigured: missing API key' }, { status: 500 });
    }

    const response = await fetchWithRetry(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log(`External API response status: ${response.status}`);
    
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = { error: await response.text() };
    }
    
    console.log(`External API response data:`, JSON.stringify(data));

    if (!response.ok) {
      // Return the error from the external API with the same status
      return NextResponse.json(data, { status: response.status });
    }

    // Cache the successful response
    apiCache.set(cacheKey, { data, timestamp: Date.now() });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json({ error: 'Failed to proxy request' }, { status: 500 });
  }
}
