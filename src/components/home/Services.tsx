
import { ArrowRight, Heart, Stethoscope, Clock, Activity, Baby, Brain, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCard from "../ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const services = [
  {
    id: "emergency-care",
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response teams for critical situations.",
    icon: Clock,
    delay: 100
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Comprehensive heart care from prevention to advanced treatments and surgery.",
    icon: Heart,
    delay: 200
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Expert diagnosis and treatment of conditions affecting the nervous system.",
    icon: Brain,
    delay: 300
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Specialized care for children from newborns to adolescents in a family-friendly environment.",
    icon: Baby,
    delay: 400
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Primary care services with expert physicians for routine check-ups and chronic disease management.",
    icon: Stethoscope,
    delay: 500
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Comprehensive care for bones, joints, muscles, and sports injuries with surgical and non-surgical options.",
    icon: Activity,
    delay: 600
  }
];

const Services = () => {
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();

  return (
    <section id="services" className="section-padding px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-gray-600">
            We offer a wide range of healthcare services to meet your needs. Our expert team is committed to providing exceptional care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={service.delay} className="group">
              <div className="bg-white rounded-xl p-6 border border-gray-100 card-shadow hover:shadow-md transition-all duration-200 h-full flex flex-col">
                <div className="bg-primary-50 rounded-lg p-3 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    to={`/services/${service.id}`} 
                    className="text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700 transition-colors"
                  >
                    Learn more 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a 
                    href={`tel:${phoneNumber}`}
                    onClick={handleAppointmentClick}
                    className="text-primary-600 font-medium inline-flex items-center ml-4 group-hover:text-primary-700 transition-colors"
                  >
                    Book now
                    <Phone className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary-600 hover:bg-primary-700 text-white"
            asChild
          >
            <Link to="/services" className="inline-flex items-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              View all services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
