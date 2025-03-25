
import { useAppointmentCall } from "@/hooks/use-appointment-call";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { motion } from "@/components/ui/motion";
import BlurImage from "@/components/ui/BlurImage";
import { Button } from "@/components/ui/button";

const ContactHero = () => {
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();
  
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-primary-50/60 to-white">
      {/* Abstract shapes for background styling */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-100/50 filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary-200/30 filter blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main content with a creative twist */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-sm mb-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Let's Connect
              </span>
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Your health journey begins with a conversation. Reach out through any channel below.
          </p>
        </div>
        
        {/* Creative contact cards with staggered layout and animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {/* Phone Card */}
          <motion.div 
            className="col-span-1 group bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-primary-50 p-4 group-hover:bg-primary-100 transition-colors">
                <Phone className="h-6 w-6 text-primary-600 mx-auto" />
              </div>
              <div className="p-4 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-500 text-xs">Available 24/7</p>
                </div>
                <a 
                  href={`tel:${phoneNumber}`}
                  onClick={handleAppointmentClick}
                  className="text-primary-600 font-medium text-sm mt-2 hover:underline"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Email Card */}
          <motion.div 
            className="col-span-1 group bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-primary-50 p-4 group-hover:bg-primary-100 transition-colors">
                <Mail className="h-6 w-6 text-primary-600 mx-auto" />
              </div>
              <div className="p-4 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-500 text-xs">24h response time</p>
                </div>
                <a 
                  href="mailto:info@healthcare.com"
                  className="text-primary-600 font-medium text-sm mt-2 hover:underline"
                >
                  info@healthcare.com
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Visit Card */}
          <motion.div 
            className="col-span-1 group bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-primary-50 p-4 group-hover:bg-primary-100 transition-colors">
                <MapPin className="h-6 w-6 text-primary-600 mx-auto" />
              </div>
              <div className="p-4 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-500 text-xs">We're here for you</p>
                </div>
                <p className="text-primary-600 font-medium text-sm mt-2">
                  123 Healthcare Blvd,<br/>Medical City, CA
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Live Chat Card */}
          <motion.div 
            className="col-span-1 group bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-primary-50 p-4 group-hover:bg-primary-100 transition-colors">
                <MessageSquare className="h-6 w-6 text-primary-600 mx-auto" />
              </div>
              <div className="p-4 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Chat Now</h3>
                  <p className="text-gray-500 text-xs">Instant support</p>
                </div>
                <Button 
                  variant="ghost"
                  className="text-primary-600 font-medium text-sm mt-2 hover:bg-primary-50 p-0 h-auto"
                  onClick={() => window.alert('Live chat feature coming soon!')}
                >
                  Start Live Chat
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Feature banner - highlighting key services */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary-50 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-primary-700">Virtual Consultations</h3>
              <p className="text-sm text-gray-600 mt-1">Connect with doctors online</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-primary-700">24/7 Emergency Care</h3>
              <p className="text-sm text-gray-600 mt-1">Always available when you need us</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-primary-700">Insurance Support</h3>
              <p className="text-sm text-gray-600 mt-1">We'll help navigate your coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
