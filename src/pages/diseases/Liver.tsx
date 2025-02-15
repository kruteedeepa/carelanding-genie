
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Liver = () => {
  return (
    <DiseaseLayout title="Liver Disease">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Understanding Liver Disease</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Liver disease is any condition that affects your liver's ability to function properly. The liver performs many critical functions including filtering toxins, producing proteins for blood plasma, and producing bile for fat digestion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hepatitis</li>
              <li>Fatty liver disease</li>
              <li>Cirrhosis</li>
              <li>Liver cancer</li>
              <li>Genetic liver diseases</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Yellowing of skin (jaundice)</li>
              <li>Abdominal pain and swelling</li>
              <li>Dark urine color</li>
              <li>Chronic fatigue</li>
              <li>Nausea or vomiting</li>
              <li>Loss of appetite</li>
              <li>Pale or bloody stools</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prevention & Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Lifestyle Changes:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Limit alcohol consumption</li>
                  <li>Maintain healthy weight</li>
                  <li>Exercise regularly</li>
                  <li>Avoid risky behaviors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Medical Management:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Regular check-ups</li>
                  <li>Vaccinations (Hepatitis A and B)</li>
                  <li>Proper medication management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Liver;
