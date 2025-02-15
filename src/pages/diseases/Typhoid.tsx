
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Typhoid = () => {
  return (
    <DiseaseLayout title="Typhoid Fever">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Typhoid Fever?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Typhoid fever is a bacterial infection caused by Salmonella typhi. It spreads through contaminated food and water, affecting the intestinal tract and bloodstream.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>High fever (103°F to 104°F, or 39.4°C to 40°C)</li>
              <li>Headache and weakness</li>
              <li>Stomach pain</li>
              <li>Loss of appetite</li>
              <li>Diarrhea or constipation</li>
              <li>Rash</li>
              <li>Fatigue</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Medical Treatment:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Antibiotics prescribed by a doctor</li>
                  <li>Supportive care and rest</li>
                  <li>Adequate hydration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Home Care:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Plenty of fluids</li>
                  <li>Soft, easily digestible foods</li>
                  <li>Rest and monitoring temperature</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prevention</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Practice good hand hygiene</li>
              <li>Drink safe, clean water</li>
              <li>Eat well-cooked foods</li>
              <li>Avoid raw vegetables unless properly cleaned</li>
              <li>Get vaccinated before traveling to high-risk areas</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Typhoid;
