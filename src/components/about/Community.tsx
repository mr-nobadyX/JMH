
import { MapPin, Users, Heart } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import BlurImage from "@/components/ui/BlurImage";

interface CommunityInitiativeProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  delay: number;
}

const CommunityInitiative = ({ title, description, image, icon, delay }: CommunityInitiativeProps) => (
  <AnimatedCard delay={delay} className="h-full">
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48">
        <BlurImage
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600">
          {icon}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </AnimatedCard>
);

const Community = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community & Social Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to improving health outcomes in our communities through various outreach programs.
          </p>
        </AnimatedCard>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CommunityInitiative
            title="Free Health Camps"
            description="We regularly organize free health checkup camps in underserved areas, providing essential healthcare services to those who need it most."
            image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80"
            icon={<MapPin className="h-5 w-5" />}
            delay={100}
          />
          <CommunityInitiative
            title="Health Education Initiatives"
            description="Our team conducts workshops and seminars in schools and community centers to raise awareness about preventive care and healthy living."
            image="https://images.unsplash.com/photo-1593620659841-eb581a18025f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            icon={<Users className="h-5 w-5" />}
            delay={200}
          />
          <CommunityInitiative
            title="Charitable Care Program"
            description="Through our charitable care program, we provide reduced-cost or free medical services to patients facing financial hardships."
            image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            icon={<Heart className="h-5 w-5" />}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
