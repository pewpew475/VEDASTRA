
"use client";

import { useState } from "react";
import { BirthDetails, MatchDetails, astrologyApi } from "../../lib/astrologyApi";

interface MatchMakingFormProps {
  onSubmit: (details: MatchDetails) => void;
  title: string;
}

export default function MatchMakingForm({ onSubmit, title }: MatchMakingFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    boyName: "",
    boyDate: "",
    boyTime: "",
    boyPlace: "",
    girlName: "",
    girlDate: "",
    girlTime: "",
    girlPlace: "",
  });

  const getBirthDetails = async (date: string, time: string, place: string): Promise<BirthDetails> => {
    const geoResult = await astrologyApi.getGeoLocation(place);
    if (!geoResult.output || geoResult.output.length === 0) {
      throw new Error(`Could not find location details for ${place}.`);
    }

    const location = geoResult.output[0];
    const birthDate = new Date(`${date}T${time}`);

    return {
      year: birthDate.getFullYear(),
      month: birthDate.getMonth() + 1,
      date: birthDate.getDate(),
      hours: birthDate.getHours(),
      minutes: birthDate.getMinutes(),
      seconds: 0,
      latitude: location.latitude,
      longitude: location.longitude,
      timezone: location.timezone,
      settings: {
        observation_point: "topocentric",
        ayanamsha: "lahiri",
      },
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const boyDetails = await getBirthDetails(formData.boyDate, formData.boyTime, formData.boyPlace);
      const girlDetails = await getBirthDetails(formData.girlDate, formData.girlTime, formData.girlPlace);

      onSubmit({
        boy: boyDetails,
        girl: girlDetails,
      });
    } catch (error: any) {
      console.error("Error in matchmaking form submission:", error);
      alert(error.message || "Something went wrong. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="astrology-tool-form-container match-making-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit} className="birth-form dual-form">
        <div className="form-column">
          <h4>Boy's Birth Details</h4>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              required
              value={formData.boyName}
              onChange={(e) => setFormData({ ...formData, boyName: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Date of Birth</span>
            <input
              type="date"
              required
              value={formData.boyDate}
              onChange={(e) => setFormData({ ...formData, boyDate: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Time of Birth</span>
            <input
              type="time"
              required
              value={formData.boyTime}
              onChange={(e) => setFormData({ ...formData, boyTime: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Place of Birth</span>
            <input
              type="text"
              required
              value={formData.boyPlace}
              onChange={(e) => setFormData({ ...formData, boyPlace: e.target.value })}
            />
          </label>
        </div>

        <div className="form-column">
          <h4>Girl's Birth Details</h4>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              required
              value={formData.girlName}
              onChange={(e) => setFormData({ ...formData, girlName: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Date of Birth</span>
            <input
              type="date"
              required
              value={formData.girlDate}
              onChange={(e) => setFormData({ ...formData, girlDate: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Time of Birth</span>
            <input
              type="time"
              required
              value={formData.girlTime}
              onChange={(e) => setFormData({ ...formData, girlTime: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Place of Birth</span>
            <input
              type="text"
              required
              value={formData.girlPlace}
              onChange={(e) => setFormData({ ...formData, girlPlace: e.target.value })}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary form-submit full-width" disabled={loading}>
          {loading ? "Matching..." : "Calculate Compatibility"}
        </button>
      </form>
    </div>
  );
}
