
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Thyroid = () => {
  return (
    <DiseaseLayout title="Thyroid Disorders">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Thyroid Disorders?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Thyroid disorders affect the thyroid gland's ability to produce hormones that regulate metabolism, energy, and mood. The two main types are hypothyroidism (underactive) and hyperthyroidism (overactive).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Thyroid Disorders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Hypothyroidism Symptoms:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fatigue</li>
                  <li>Weight gain</li>
                  <li>Cold sensitivity</li>
                  <li>Depression</li>
                  <li>Dry skin and hair</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mt-4">Hyperthyroidism Symptoms:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Anxiety</li>
                  <li>Weight loss</li>
                  <li>Heat sensitivity</li>
                  <li>Rapid heartbeat</li>
                  <li>Sleep problems</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Diagnosis</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Blood tests for TSH levels</li>
              <li>T3 and T4 hormone tests</li>
              <li>Thyroid antibody tests</li>
              <li>Physical examination</li>
              <li>Imaging tests if needed</li>
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
                  <li>Hormone replacement therapy</li>
                  <li>Anti-thyroid medications</li>
                  <li>Radioactive iodine treatment</li>
                  <li>Surgery in some cases</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lifestyle Changes:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Regular exercise</li>
                  <li>Balanced diet</li>
                  <li>Stress management</li>
                  <li>Regular monitoring</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Thyroid;
