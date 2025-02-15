
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Allergy = () => {
  return (
    <DiseaseLayout title="Allergies">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Understanding Allergies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Allergies occur when your immune system reacts to a foreign substance that doesn't cause a reaction in most people. These substances (allergens) can cause sneezing, itching, and breathing problems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Allergens</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pollen</li>
              <li>Dust mites</li>
              <li>Animal dander</li>
              <li>Certain foods</li>
              <li>Insect stings</li>
              <li>Medications</li>
              <li>Mold</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sneezing and runny nose</li>
              <li>Itchy or watery eyes</li>
              <li>Wheezing or coughing</li>
              <li>Skin rashes or hives</li>
              <li>Swelling</li>
              <li>Difficulty breathing</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Treatment Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Medications:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Antihistamines</li>
                  <li>Decongestants</li>
                  <li>Nasal corticosteroids</li>
                  <li>Eye drops</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Other Treatments:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Immunotherapy (allergy shots)</li>
                  <li>Avoiding triggers</li>
                  <li>HEPA filters</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Allergy;
