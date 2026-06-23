
"use client";

import { useState, useEffect } from "react";
import { BirthDetails, astrologyApi } from "../../lib/astrologyApi";

interface BirthChartResultProps {
  details: BirthDetails;
  onBack: () => void;
}

export default function BirthChartResult({ details, onBack }: BirthChartResultProps) {
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState<string>("D1");
  const [chartData, setChartData] = useState<{ svg?: string; planets?: any[] }>({});
  const [error, setError] = useState<{ message: string; status?: number } | null>(null);

  const chartOptions = [
    { label: "Main Birth Chart (D1)", value: "D1" },
    { label: "Navamsa Chart (D9)", value: "D9" },
    { label: "Hora Chart (D2)", value: "D2" },
    { label: "Drekkana Chart (D3)", value: "D3" },
    { label: "Chaturthamsa Chart (D4)", value: "D4" },
    { label: "Saptamsa Chart (D7)", value: "D7" },
    { label: "Dashamsha Chart (D10)", value: "D10" },
    { label: "Dwadamsha Chart (D12)", value: "D12" },
    { label: "Shodashamsha Chart (D16)", value: "D16" },
    { label: "Vishamsha Chart (D20)", value: "D20" },
    { label: "Chaturvimshamsha Chart (D24)", value: "D24" },
    { label: "Saptavimshamsha Chart (D27)", value: "D27" },
    { label: "Trimshamsha Chart (D30)", value: "D30" },
    { label: "Khavedamsha Chart (D40)", value: "D40" },
    { label: "Akshavedamsha Chart (D45)", value: "D45" },
    { label: "Shashtiamsha Chart (D60)", value: "D60" },
  ];

  // Fetch planets once on mount
  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await astrologyApi.getPlanetsExtended(details);
        setChartData(prev => ({ ...prev, planets: (response as any).output }));
      } catch (err: any) {
        try {
          const response = await astrologyApi.getBirthChart(details);
          setChartData(prev => ({ ...prev, planets: (response as any).output }));
        } catch (fallbackErr: any) {
          console.error("Standard planets fetch failed:", fallbackErr);
          if (fallbackErr.status === 429) {
            setError({ message: "API rate limit reached. Please wait a moment and try again.", status: 429 });
          } else {
            setError({ message: "Failed to load planetary data. Please check your internet connection and try again." });
          }
        }
      }
    }
    fetchPlanets();
  }, [details]);

  // Fetch chart SVG whenever chartType changes
  useEffect(() => {
    async function fetchChart() {
      try {
        setLoading(true);
        // Don't clear previous error here, let the UI handle it
        
        let svgResponse;
        console.log(`Fetching chart for type: ${chartType}`);
        
        switch (chartType) {
          case "D1": svgResponse = await astrologyApi.getBirthChartSvg(details); break;
          case "D9": svgResponse = await astrologyApi.getNavamsaChart(details); break;
          case "D2": svgResponse = await astrologyApi.getD2Chart(details); break;
          case "D3": svgResponse = await astrologyApi.getD3Chart(details); break;
          case "D4": svgResponse = await astrologyApi.getD4Chart(details); break;
          case "D7": svgResponse = await astrologyApi.getD7Chart(details); break;
          case "D10": svgResponse = await astrologyApi.getD10Chart(details); break;
          case "D12": svgResponse = await astrologyApi.getD12Chart(details); break;
          case "D16": svgResponse = await astrologyApi.getD16Chart(details); break;
          case "D20": svgResponse = await astrologyApi.getD20Chart(details); break;
          case "D24": svgResponse = await astrologyApi.getD24Chart(details); break;
          case "D27": svgResponse = await astrologyApi.getD27Chart(details); break;
          case "D30": svgResponse = await astrologyApi.getD30Chart(details); break;
          case "D40": svgResponse = await astrologyApi.getD40Chart(details); break;
          case "D45": svgResponse = await astrologyApi.getD45Chart(details); break;
          case "D60": svgResponse = await astrologyApi.getD60Chart(details); break;
          default: svgResponse = await astrologyApi.getBirthChartSvg(details);
        }

        const svgContent = (svgResponse as any).output;
        console.log(`Chart SVG received for ${chartType}`);
        setChartData(prev => ({ ...prev, svg: svgContent }));
        setError(null); // Clear error on success
      } catch (err: any) {
        console.error(`Error fetching ${chartType} chart:`, err);
        if (err.status === 429) {
          setError({ message: "API rate limit reached. Please wait a moment and try again.", status: 429 });
        } else {
          setError({ message: `Failed to generate ${chartType} chart. Please try again.`, status: err.status });
        }
      } finally {
        setLoading(false);
      }
    }

    fetchChart();
  }, [details, chartType]);

  const moonPlanet = chartData.planets?.find(p => {
    const key = Object.keys(p)[0];
    return p[key].name === "Moon";
  });
  
  const moonSign = moonPlanet ? moonPlanet[Object.keys(moonPlanet)[0]].sign : null;

  if (loading && !chartData.planets && !error) {
    return (
      <div className="birth-chart-loading">
        <p>Calculating planetary positions and drawing your birth chart...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error && !chartData.planets) {
    return (
      <div className="birth-chart-error p-8 text-center bg-red-50 rounded-lg border border-red-200">
        <div className="text-4xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold text-red-800 mb-2">Something went wrong</h3>
        <p className="text-red-600 mb-6">{error.message}</p>
        <div className="flex justify-center gap-4">
          <button onClick={onBack} className="btn btn-secondary">Go Back</button>
          <button onClick={() => window.location.reload()} className="btn btn-primary">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="birth-chart-result-container">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="btn btn-link">← Back to Form</button>
        {moonSign && (
          <div className="moon-sign-badge bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
            🌙 Moon Sign: {moonSign}
          </div>
        )}
      </div>
      
      <div className="chart-controls mb-6 flex items-center gap-4">
        <label htmlFor="chart-type" className="font-medium text-slate-200">View Chart:</label>
        <div className="relative min-w-[240px]">
          <select 
            id="chart-type" 
            value={chartType} 
            onChange={(e) => setChartType(e.target.value)}
            className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/50 px-4 py-2 text-sm text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition duration-200 focus:border-purple-300/50 focus:bg-slate-900/80 focus:ring-2 focus:ring-purple-300/20 backdrop-blur-sm cursor-pointer pr-10"
          >
            {chartOptions.map(opt => (
              <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
        {loading && <span className="text-sm text-purple-300 italic animate-pulse">Updating...</span>}
      </div>

      <div className="chart-content">
        <div className="chart-visual">
          <h3>{chartOptions.find(o => o.value === chartType)?.label}</h3>
          {chartData.svg ? (
            <div 
              className="chart-svg" 
              dangerouslySetInnerHTML={{ __html: chartData.svg }} 
            />
          ) : (
            <p>Chart visual not available.</p>
          )}
        </div>

        <div className="planets-table">
          <h3>Planetary Positions</h3>
          <table>
            <thead>
              <tr>
                <th>Planet</th>
                <th>Sign</th>
                <th>Nakshatra</th>
                <th>House</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {chartData.planets?.map((p, i) => {
                if (!p) return null;
                const planetKey = Object.keys(p)[0];
                const planet = p[planetKey];
                if (!planet) return null;
                
                return (
                  <tr key={i}>
                    <td className="font-semibold">{planet.name || "Unknown"}</td>
                    <td>{planet.sign || "—"}</td>
                    <td>{planet.nakshatra || "—"}</td>
                    <td>{planet.house || "—"}</td>
                    <td>{typeof planet.position === 'number' ? planet.position.toFixed(2) : planet.position || "—"}°</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="chart-actions mt-8">
        <button className="btn btn-primary">Download PDF (Paid Service)</button>
        <button className="btn btn-secondary" onClick={() => window.print()}>Print Chart</button>
      </div>
    </div>
  );
}
