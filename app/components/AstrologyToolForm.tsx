
"use client";

import { useState } from "react";
import { BirthDetails, astrologyApi } from "../../lib/astrologyApi";

interface AstrologyToolFormProps {
  onSubmit: (details: BirthDetails) => void;
  title: string;
}

export default function AstrologyToolForm({ onSubmit, title }: AstrologyToolFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    place: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Get Geo Location
      const geoResult = await astrologyApi.getGeoLocation(formData.place);
      if (!geoResult.output || geoResult.output.length === 0) {
        throw new Error("Could not find location details.");
      }

      const location = geoResult.output[0];
      const birthDate = new Date(`${formData.date}T${formData.time}`);

      const details: BirthDetails = {
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

      onSubmit(details);
    } catch (error) {
      console.error("Error in form submission:", error);
      alert("Something went wrong. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="astrology-tool-form-container">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit} className="birth-form">
        <div className="tool-field-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="tool-field-row">
          <div className="tool-field-group">
            <label>Date of Birth</label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="tool-field-group">
            <label>Time of Birth</label>
            <input
              type="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
        </div>

        <div className="tool-field-group">
          <label>Place of Birth</label>
          <input
            type="text"
            placeholder="City, State, Country"
            required
            value={formData.place}
            onChange={(e) => setFormData({ ...formData, place: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary tool-form-submit-btn"
          disabled={loading}
        >
          {loading ? (
            <span className="tool-form-loading">
              <span className="tool-form-spinner" />
              Calculating...
            </span>
          ) : "Generate Insights"}
        </button>
      </form>
    </div>
  );
}
