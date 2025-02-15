
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Kidney = () => {
  return (
    <DiseaseLayout title="Kidney Disease">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Kidney Disease?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Kidney disease occurs when your kidneys are damaged and can't filter blood properly. This condition can lead to waste buildup in your body and cause other health problems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Changes in urination</li>
              <li>Swelling in ankles and feet</li>
              <li>Fatigue</li>
              <li>Shortness of breath</li>
              <li>Nausea and vomiting</li>
              <li>Poor appetite</li>
              <li>Sleep problems</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Diabetes</li>
              <li>High blood pressure</li>
              <li>Heart disease</li>
              <li>Family history of kidney disease</li>
              <li>Obesity</li>
              <li>Smoking</li>
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
                <h4 className="font-semibold mb-2">Medical Treatments:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Medications for underlying conditions</li>
                  <li>Dialysis</li>
                  <li>Kidney transplant</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lifestyle Changes:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Low-salt diet</li>
                  <li>Regular exercise</li>
                  <li>Blood pressure management</li>
                  <li>Quitting smoking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Kidney;
