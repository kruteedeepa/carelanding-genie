
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface DiseaseLayoutProps {
  title: string;
  children: React.ReactNode;
}

const DiseaseLayout = ({ title, children }: DiseaseLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <Link
          to="/"
          className="inline-flex items-center text-jeevanti-600 hover:text-jeevanti-700 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default DiseaseLayout;
