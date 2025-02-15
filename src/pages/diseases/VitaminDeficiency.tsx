
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VitaminDeficiency = () => {
  return (
    <DiseaseLayout title="Vitamin Deficiency">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Vitamin Deficiency?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Vitamin deficiency occurs when the body doesn't get or can't absorb the required amount of vitamins necessary for healthy functioning. Different vitamin deficiencies can lead to various health issues and complications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Fatigue and weakness</li>
              <li>Bone and joint pain</li>
              <li>Changes in mood</li>
              <li>Poor immune function</li>
              <li>Skin problems</li>
              <li>Hair loss</li>
              <li>Vision problems</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Causes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Poor diet or malnutrition</li>
              <li>Restricted eating patterns</li>
              <li>Medical conditions affecting absorption</li>
              <li>Pregnancy and breastfeeding</li>
              <li>Aging</li>
              <li>Limited exposure to sunlight (for Vitamin D)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prevention & Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dietary Changes:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Eat a balanced diet rich in fruits and vegetables</li>
                  <li>Include whole grains and lean proteins</li>
                  <li>Consider fortified foods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supplements:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Multivitamin supplements as recommended by healthcare provider</li>
                  <li>Specific vitamin supplements based on deficiency</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>When to See a Doctor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Consult a healthcare provider if you experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Persistent fatigue or weakness</li>
              <li>Unusual skin changes</li>
              <li>Bone or joint pain</li>
              <li>Irregular heartbeat</li>
              <li>Numbness or tingling in hands or feet</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default VitaminDeficiency;
