
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const diseases = [
  { name: "Vitamin Deficiency", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/vitamin-deficiency" },
  { name: "Typhoid", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/typhoid" },
  { name: "Diabetes", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/diabetes" },
  { name: "Allergy", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/allergy" },
  { name: "Kidney", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/kidney" },
  { name: "Liver", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/liver" },
  { name: "Pregnancy", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/pregnancy" },
  { name: "Thyroid", image: "/lovable-uploads/daf86d1a-63ca-4c91-b2db-4c271bb2c5e9.png", link: "/diseases/thyroid" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Diseases Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Common Health Conditions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {diseases.map((disease) => (
              <a
                key={disease.name}
                href={disease.link}
                className="group flex flex-col items-center"
              >
                <div className="w-24 h-24 mb-2 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center p-2 transition-transform transform group-hover:scale-105">
                  <img
                    src={disease.image}
                    alt={disease.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-700 text-center group-hover:text-jeevanti-600">
                  {disease.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Updated Services without the diseases option */}
        <Services />
      </main>
    </div>
  );
};

export default Index;
