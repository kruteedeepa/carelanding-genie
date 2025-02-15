
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Diabetes = () => {
  return (
    <DiseaseLayout title="Diabetes">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Diabetes?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Diabetes is a chronic health condition that affects how your body turns food into energy. With diabetes, your body either doesn't make enough insulin or can't use it as well as it should, leading to high blood sugar levels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Diabetes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Type 1 Diabetes</h4>
                <p className="text-gray-700">An autoimmune reaction that stops your body from making insulin.</p>
              </div>
              <div>
                <h4 className="font-semibold">Type 2 Diabetes</h4>
                <p className="text-gray-700">Your body doesn't use insulin well and can't maintain normal blood sugar levels.</p>
              </div>
              <div>
                <h4 className="font-semibold">Gestational Diabetes</h4>
                <p className="text-gray-700">Develops in pregnant women who have never had diabetes.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Increased thirst and urination</li>
              <li>Extreme hunger</li>
              <li>Unexplained weight loss</li>
              <li>Fatigue</li>
              <li>Blurred vision</li>
              <li>Slow-healing sores</li>
              <li>Frequent infections</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Family history of diabetes</li>
              <li>Obesity or being overweight</li>
              <li>Physical inactivity</li>
              <li>Age (45 or older)</li>
              <li>High blood pressure</li>
              <li>History of gestational diabetes</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Management & Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Lifestyle Changes:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Healthy eating</li>
                  <li>Regular physical activity</li>
                  <li>Weight management</li>
                  <li>Blood sugar monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Medical Treatment:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Insulin therapy (for Type 1)</li>
                  <li>Oral medications</li>
                  <li>Regular health check-ups</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Heart disease and stroke</li>
              <li>Kidney damage</li>
              <li>Eye problems</li>
              <li>Nerve damage (neuropathy)</li>
              <li>Foot problems</li>
              <li>Skin conditions</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Diabetes;
