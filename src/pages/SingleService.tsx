import { useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowRight, Clock, FileText, Heart, Microscope, Phone, Star, Stethoscope, Users, ChevronRight, Calendar, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { servicesData } from "@/data/servicesData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const SingleService = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { "*": serviceId } = useParams();
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();
  
  const service = serviceId ? servicesData[serviceId] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!service) {
      toast({
        title: "Service not found",
        description: "The requested service doesn't exist or has been moved.",
        variant: "destructive"
      });
      
      // Redirect to services page if service not found
      setTimeout(() => {
        navigate("/services");
      }, 2000);
    }
  }, [service, toast, navigate]);
  
  // If service not found, show minimal content with redirection
  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Loading service information...</h1>
            <p className="text-gray-600 mb-6">You'll be redirected to our services page shortly.</p>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative h-[600px] flex items-center bg-gradient-to-r from-primary-900/90 to-primary-700/90 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
              style={{ opacity: 0.2 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/80" />
          </div>
          
          {/* Decoration Elements */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute left-20 bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
          
          {/* Content Container */}
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedCard>
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center text-primary-50/80">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="h-4 w-4 mx-2" />
                  <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                  <ChevronRight className="h-4 w-4 mx-2" />
                  <span className="text-white">{service.title}</span>
                </nav>
                
                {/* Service Icon */}
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-5 w-20 h-20 flex items-center justify-center mb-6">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Title & Description */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                  {service.shortDescription}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary-800 hover:bg-white/90 border-2 border-white" 
                    asChild
                  >
                    <a 
                      href={`tel:${phoneNumber}`}
                      onClick={handleAppointmentClick}
                      className="flex items-center"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book an Appointment
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-2 border-white/70 hover:bg-white/10 hover:border-white" asChild>
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Speak to a Specialist
                    </Link>
                  </Button>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="bg-white py-6 border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCard delay={100}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-primary-50 rounded-full p-3 mb-3">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">95%</p>
                  <p className="text-sm text-gray-600 text-center">Success Rate</p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={200}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-primary-50 rounded-full p-3 mb-3">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">20+</p>
                  <p className="text-sm text-gray-600 text-center">Specialist Doctors</p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={300}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-primary-50 rounded-full p-3 mb-3">
                    <Microscope className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">12+</p>
                  <p className="text-sm text-gray-600 text-center">Advanced Equipment</p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={400}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-primary-50 rounded-full p-3 mb-3">
                    <Star className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                  <p className="text-sm text-gray-600 text-center">Patient Rating</p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Enhanced Description Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <AnimatedCard>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-primary-600 pl-4">
                    About Our {service.title} Service
                  </h2>
                  
                  <div className="prose max-w-none text-gray-600">
                    <p className="text-lg leading-relaxed mb-8 bg-white p-6 rounded-lg shadow-sm">
                      {service.detailedDescription}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-6 bg-primary-50 p-4 rounded-lg inline-block">
                      Our Procedures Include:
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {service.procedures.map((procedure, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start">
                          <div className="bg-primary-100 rounded-full p-2 mr-3 mt-0.5 flex-shrink-0">
                            <ArrowRight className="h-4 w-4 text-primary-600" />
                          </div>
                          <span className="text-gray-700">{procedure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              <div>
                <AnimatedCard delay={200}>
                  <Card className="bg-gradient-to-br from-blue-50 to-primary-50 border-primary-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl text-primary-800 font-bold">Who Is This Service For?</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {service.targetAudience}
                      </p>
                      <div className="flex items-center justify-center mt-4 bg-white/50 p-6 rounded-xl backdrop-blur-sm">
                        <service.icon className="h-20 w-20 text-primary-400" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <div className="inline-block mb-4 bg-primary-100 px-6 py-2 rounded-full">
                <h2 className="text-primary-700 font-semibold">Key Features</h2>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our {service.title} Service</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine expertise, advanced technology, and compassionate care to provide exceptional results
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.keyHighlights.map((highlight, index) => (
                <AnimatedCard key={index} delay={index * 100} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary-50 overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-600 group-hover:w-3 transition-all duration-300"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-semibold text-primary-700 group-hover:text-primary-600 transition-colors">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore other specialized healthcare services that might complement your care
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.relatedServices.map((relatedServiceId, index) => {
                const relatedService = servicesData[relatedServiceId];
                
                if (!relatedService) return null;
                
                return (
                  <AnimatedCard key={index} delay={index * 100}>
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className="p-6">
                        <div className="bg-primary-50 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                          <relatedService.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedService.title}</h3>
                        <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                        <Link 
                          to={`/services/${relatedServiceId}`}
                          className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
                        >
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedCard>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Schedule Your Appointment?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our team of healthcare professionals is ready to provide you with exceptional {service.title.toLowerCase()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-primary-50" 
                  asChild
                >
                  <a 
                    href={`tel:${phoneNumber}`}
                    onClick={handleAppointmentClick}
                    className="flex items-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Book an Appointment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" /> Contact Us
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SingleService;


