
import DiseaseLayout from "@/components/DiseaseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pregnancy = () => {
  return (
    <DiseaseLayout title="Pregnancy Care">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Pregnancy Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Pregnancy is a time of significant changes in a woman's body. Proper care during pregnancy is essential for the health of both mother and baby. Understanding these changes and knowing what to expect can help ensure a healthy pregnancy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Symptoms During Pregnancy</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Morning sickness</li>
              <li>Fatigue</li>
              <li>Food cravings or aversions</li>
              <li>Mood changes</li>
              <li>Back pain</li>
              <li>Swelling in feet and ankles</li>
              <li>Frequent urination</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Essential Prenatal Care</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Medical Care:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Regular prenatal check-ups</li>
                  <li>Required vaccinations</li>
                  <li>Prenatal vitamins</li>
                  <li>Screening tests</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lifestyle Recommendations:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Balanced nutrition</li>
                  <li>Regular gentle exercise</li>
                  <li>Adequate rest</li>
                  <li>Stress management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Warning Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Seek immediate medical attention if you experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Severe abdominal pain</li>
              <li>Heavy vaginal bleeding</li>
              <li>Severe headaches</li>
              <li>Reduced fetal movement</li>
              <li>High fever</li>
              <li>Sudden swelling</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DiseaseLayout>
  );
};

export default Pregnancy;
