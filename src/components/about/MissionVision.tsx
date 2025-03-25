
import { Heart, Target, Lightbulb, Shield, Users } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon, title, description, delay }: ValueCardProps) => (
  <AnimatedCard delay={delay} className="h-full">
    <Card className="h-full border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-14 w-14 rounded-full bg-primary-50 flex items-center justify-center mb-4 text-primary-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const MissionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission, Vision & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that shape our healthcare approach and commitment to excellence.
          </p>
        </AnimatedCard>

        <div className="grid gap-8 md:grid-cols-3">
          <AnimatedCard delay={100}>
            <Card className="h-full border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-primary-50 flex items-center justify-center mb-4 text-primary-600">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver exceptional healthcare services that improve quality of life, guided by compassion, 
                  innovation, and evidence-based practices, ensuring every patient receives personalized 
                  care of the highest standard.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <Card className="h-full border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-primary-50 flex items-center justify-center mb-4 text-primary-600">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading healthcare provider recognized for clinical excellence, 
                  patient-centered care, and innovative medical solutions, transforming the 
                  health and wellbeing of the communities we serve.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={300}>
            <Card className="h-full border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Core Values</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 text-primary-600 flex-shrink-0">
                      <Heart className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Compassion</h4>
                      <p className="text-sm text-gray-600">Treating patients with empathy and understanding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 text-primary-600 flex-shrink-0">
                      <Shield className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Integrity</h4>
                      <p className="text-sm text-gray-600">Upholding the highest ethical standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 text-primary-600 flex-shrink-0">
                      <Lightbulb className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Innovation</h4>
                      <p className="text-sm text-gray-600">Embracing advanced medical technologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 text-primary-600 flex-shrink-0">
                      <Users className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Patient-Centric</h4>
                      <p className="text-sm text-gray-600">Focusing on individual patient needs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
