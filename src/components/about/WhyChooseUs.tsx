
import { Check, Shield, Heart, Star, Lightbulb, Clock } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <AnimatedCard delay={delay} className="h-full">
    <div className="flex">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-50 flex items-center justify-center mr-4 text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </AnimatedCard>
);

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose HealthHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional healthcare services that put patients first.
          </p>
        </AnimatedCard>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Star className="h-6 w-6" />}
            title="Healthcare Excellence"
            description="Our hospital consistently ranks among the top healthcare providers nationally for clinical outcomes and patient satisfaction."
            delay={100}
          />
          <Feature
            icon={<Check className="h-6 w-6" />}
            title="Expert Medical Team"
            description="Our doctors and specialists are leaders in their fields, bringing decades of combined experience to your care."
            delay={200}
          />
          <Feature
            icon={<Lightbulb className="h-6 w-6" />}
            title="Advanced Technology"
            description="We invest in cutting-edge medical technology to provide the most accurate diagnoses and effective treatments."
            delay={300}
          />
          <Feature
            icon={<Heart className="h-6 w-6" />}
            title="Patient-Centered Care"
            description="We design our services around your needs, ensuring a comfortable, supportive healthcare experience."
            delay={400}
          />
          <Feature
            icon={<Clock className="h-6 w-6" />}
            title="24/7 Emergency Care"
            description="Our emergency department is staffed round-the-clock by specialists ready to provide immediate, life-saving care."
            delay={500}
          />
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Comprehensive Services"
            description="From preventive care to specialized treatments, we offer a complete range of healthcare services under one roof."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
