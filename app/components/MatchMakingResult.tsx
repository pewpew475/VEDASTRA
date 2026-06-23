
"use client";

import { useState, useEffect } from "react";
import { MatchDetails, astrologyApi } from "../../lib/astrologyApi";

interface MatchMakingResultProps {
  details: MatchDetails;
  onBack: () => void;
}

export default function MatchMakingResult({ details, onBack }: MatchMakingResultProps) {
  const [loading, setLoading] = useState(true);
  const [matchData, setMatchData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMatch() {
      try {
        setLoading(true);
        const result = await astrologyApi.getMatchMaking(details);
        setMatchData((result as any).output);
      } catch (err) {
        console.error("Error fetching matchmaking score:", err);
        setError("Failed to generate matchmaking report. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchMatch();
  }, [details]);

  if (loading) {
    return (
      <div className="birth-chart-loading">
        <p>Analyzing compatibility and calculating Ashtakoot score...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="birth-chart-error">
        <p>{error}</p>
        <button onClick={onBack} className="btn btn-secondary">Go Back</button>
      </div>
    );
  }

  return (
    <div className="matchmaking-result-container">
      <button onClick={onBack} className="btn btn-link mb-4">← Back to Form</button>
      
      <div className="match-summary">
        <div className="score-card">
          <h3>Compatibility Score</h3>
          <div className="score-display">
            <span className="current-score">{matchData?.total_points || 0}</span>
            <span className="max-score">/ 36</span>
          </div>
          <p className="score-verdict">{matchData?.verdict || "Compatibility analysis complete."}</p>
        </div>

        <div className="ashtakoot-table">
          <h3>Ashtakoot Details</h3>
          <table>
            <thead>
              <tr>
                <th>Attribute (Koot)</th>
                <th>Received</th>
                <th>Maximum</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {matchData?.ashtakoot && Object.entries(matchData.ashtakoot).map(([key, value]: [string, any]) => (
                <tr key={key}>
                  <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                  <td>{value.received_points}</td>
                  <td>{value.max_points}</td>
                  <td>{value.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
