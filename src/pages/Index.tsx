
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const diseases = [
  { 
    name: "Vitamin Deficiency", 
    image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/high-angle-view-man-rubbing-970831265.jpg?crop=1&h=483&quality=100&strip=all&w=724", 
    link: "/diseases/vitamin-deficiency" 
  },
  { 
    name: "Typhoid", 
    image: "https://www.ckbhospital.com/wp-content/uploads/2022/08/Typhoid-Signs-and-Symptoms-1.jpg", 
    link: "/diseases/typhoid" 
  },
  { 
    name: "Diabetes", 
    image: "https://internalmedicine.usc.edu/wp-content/uploads/2021/11/man-takes-diabetes-test.jpg", 
    link: "/diseases/diabetes" 
  },
  { 
    name: "Allergy", 
    image: "https://londondermatologyclinics.com/wp-content/uploads/2023/06/skin-allergy.jpg", 
    link: "/diseases/allergy" 
  },
  { 
    name: "Kidney", 
    image: "https://www.durhamnephrology.com/wp-content/uploads/2020/11/image1.jpg", 
    link: "/diseases/kidney" 
  },
  { 
    name: "Liver", 
    image: "https://images.ctfassets.net/uwf0n1j71a7j/7JDSZObaNaqP1aoHHEh0bY/53840215c7d46b1ef369c9e4d0d76850/kidney-pain.png?w=3840&q=75", 
    link: "/diseases/liver" 
  },
  { 
    name: "Pregnancy", 
    image: "https://tse1.mm.bing.net/th?id=OIP.zDOdyB83V77auF3ws3J67QHaEK&pid=Api&P=0&h=180", 
    link: "/diseases/pregnancy" 
  },
  { 
    name: "Thyroid", 
    image: "https://tse1.mm.bing.net/th?id=OIP.qZgr6yElKpPVaA4dkRGbpQHaE8&pid=Api&P=0&h=180", 
    link: "/diseases/thyroid" 
  },
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
