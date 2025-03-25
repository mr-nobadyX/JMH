
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BlurImage from "../ui/BlurImage";
import { Button } from "@/components/ui/button";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const Hero = () => {
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();

  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 lg:min-h-screen lg:flex lg:items-center px-4 md:px-8 overflow-hidden bg-gradient-to-b from-white to-primary-50/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in-left">
          <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Comprehensive Healthcare Services
          </div>
          <h1 className="font-bold text-gray-900 leading-tight">
            Your Health, <span className="text-primary-600">Our Priority</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Expert doctors, world-class facilities, and 24/7 emergency care. 
            We're committed to providing exceptional healthcare services.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              className="bg-primary-600 hover:bg-primary-700 text-white" 
              onClick={handleAppointmentClick}
              asChild
            >
              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book an Appointment
              </a>
            </Button>
            <Link to="/services" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md transition-colors hover:bg-gray-50 flex items-center">
              Our Services
            </Link>
          </div>
          <div className="pt-4 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <BlurImage 
                    src={`https://randomuser.me/api/portraits/men/${i + 50}.jpg`} 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="text-gray-700 font-medium">Trusted by</p>
              <p className="text-primary-600 font-bold">10,000+ Patients</p>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in-right">
          <div className="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-3 scale-95"></div>
          <div className="relative rounded-2xl overflow-hidden animate-float shadow-lg">
            <BlurImage 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Hospital Entrance"
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium">State-of-the-art facilities for your care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
