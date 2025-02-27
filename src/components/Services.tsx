
import {
  Stethoscope,
  Activity,
  MessageSquare,
  Dumbbell,
  Pill,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  link?: string;
}

const services: Service[] = [
  {
    title: "Doctor Consultation",
    icon: Stethoscope,
    description: "Connect with expert healthcare professionals",
  },
  {
    title: "Health Checks & Tests",
    icon: Activity,
    description: "Comprehensive health screenings and diagnostics",
  },
  {
    title: "Health Chat",
    icon: MessageSquare,
    description: "Get instant answers to your health queries",
  },
  {
    title: "Yoga & Wellness",
    icon: Dumbbell,
    description: "Wellness through traditional practices",
  },
  {
    title: "Order Medicines",
    icon: Pill,
    description: "Quick and reliable medicine delivery",
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {services.map((service, index) => (
        <Link
          key={service.title}
          to={service.link || "#"}
          className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-jeevanti-50 rounded-full group-hover:bg-jeevanti-100 transition-colors">
              <service.icon className="h-6 w-6 text-jeevanti-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            <p className="text-sm text-gray-500">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
