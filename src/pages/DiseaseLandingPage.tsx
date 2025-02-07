
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const diseases = [
  { name: "Diabetes", icon: "🩸", link: "/diseases/diabetes" },
  { name: "Hypertension", icon: "💓", link: "/diseases/hypertension" },
  { name: "Asthma", icon: "🌬️", link: "/diseases/asthma" },
  { name: "Arthritis", icon: "🦴", link: "/diseases/arthritis" },
  { name: "Migraine", icon: "🤕", link: "/diseases/migraine" },
];

export default function DiseaseLandingPage() {
  const [showDiseases, setShowDiseases] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 flex flex-col items-center p-6">
        <div className="max-w-3xl w-full"> {/* Container with limited width */}
          <h1 className="text-4xl font-bold text-jeevanti-700 mb-6 text-center">
            Disease Information Hub
          </h1>
          
          <div className="flex justify-center">
            <button
              className="bg-jeevanti-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-jeevanti-700 transition-all"
              onClick={() => setShowDiseases(!showDiseases)}
            >
              {showDiseases ? "Hide Diseases" : "View Diseases"}
            </button>
          </div>
          
          {showDiseases && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {diseases.map((disease) => (
                <Link to={disease.link} key={disease.name}>
                  <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-jeevanti-100">
                    <span className="text-5xl">{disease.icon}</span>
                    <p className="text-lg font-semibold text-jeevanti-800 mt-2">
                      {disease.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
