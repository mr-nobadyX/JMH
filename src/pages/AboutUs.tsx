
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MissionVision from "@/components/about/MissionVision";
import Journey from "@/components/about/Journey";
import Achievements from "@/components/about/Achievements";
import Leadership from "@/components/about/Leadership";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Community from "@/components/about/Community";
import { Phone } from "lucide-react";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Simple Hero Section */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-5xl md:text-6xl mb-6 text-primary-800">
                Our Story of Healing
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
                For over 25 years, we've been committed to providing exceptional healthcare with compassion and innovation, improving the lives of the communities we serve.
              </p>
              
              <a 
                href={`tel:${phoneNumber}`}
                onClick={handleAppointmentClick}
                className="inline-flex items-center gap-2 bg-primary-600 px-6 py-3 text-white font-medium rounded-full hover:bg-primary-700 transition-colors"
              >
                <Phone size={18} />
                <span>Connect With Us</span>
              </a>
              
              {/* Simple stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
                {[
                  { value: "25+", label: "Years of Excellence" },
                  { value: "50k+", label: "Patients Served" },
                  { value: "200+", label: "Medical Experts" },
                  { value: "98%", label: "Patient Satisfaction" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl bg-white shadow-sm"
                  >
                    <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <div>
          <MissionVision />
          <WhyChooseUs />
          <Community />
          <Journey />
          <Achievements />
          <Leadership />
          <AboutTestimonials />
          <AboutCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
