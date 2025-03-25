
import { ArrowRight } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface LeaderCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  delay: number;
}

const LeaderCard = ({ id, name, role, bio, imageSrc, delay }: LeaderCardProps) => (
  <AnimatedCard delay={delay} className="h-full">
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex flex-col items-center text-center flex-grow">
        <Avatar className="h-24 w-24 mb-4 border-2 border-primary-100">
          <AvatarImage src={imageSrc} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <Badge variant="outline" className="mb-3 bg-primary-50 text-primary-700">{role}</Badge>
        
        <div className="text-gray-600 mb-4 space-y-2">
          {bio.split('. ').map((sentence, i) => (
            sentence && <p key={i} className="leading-relaxed">{sentence}.</p>
          ))}
        </div>
        
        <Button variant="outline" size="sm" className="mt-auto group" asChild>
          <Link to={`/leadership/${id}`}>
            Read Full Profile
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  </AnimatedCard>
);

const Leadership = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary team guiding HealthHub toward excellence in healthcare.
          </p>
        </AnimatedCard>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <LeaderCard
            id="1"
            name="Dr. Emily Chen"
            role="Chief Executive Officer"
            bio="With over 20 years of experience in healthcare management and a background in cardiology, Dr. Chen has been leading HealthHub since 2015."
            imageSrc="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            delay={100}
          />
          <LeaderCard
            id="2"
            name="Dr. James Wilson"
            role="Chief Medical Officer"
            bio="A renowned surgeon specializing in neurological procedures, Dr. Wilson ensures our medical practices meet the highest standards."
            imageSrc="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80"
            delay={200}
          />
          <LeaderCard
            id="3"
            name="Sarah Johnson"
            role="Chief Operations Officer"
            bio="Sarah brings her expertise in healthcare operations and strategic planning to ensure efficient and effective service delivery."
            imageSrc="https://images.unsplash.com/photo-1605125950585-8b4f4a51589d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            delay={300}
          />
          <LeaderCard
            id="4"
            name="Dr. Michael Patel"
            role="Director of Research"
            bio="Leading our research initiatives, Dr. Patel focuses on translating cutting-edge medical research into improved patient care."
            imageSrc="https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
