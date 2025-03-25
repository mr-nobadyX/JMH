import { ArrowRight, Heart, Users, MapPin, Award, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import BlurImage from "@/components/ui/BlurImage";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const AboutHero = () => {
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Creative background with diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/70 via-white to-primary-50/60 z-0"></div>
      
      {/* Diagonal decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-primary-100/30 -skew-x-12 transform origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-96 bg-blue-50/50 skew-x-12 transform origin-bottom-left z-0"></div>
      
      {/* Floating circles */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-primary-100/20 blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Central headline with floating elements around it */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block bg-primary-50/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary-800 font-medium tracking-wide flex items-center gap-1">
              <Award className="h-4 w-4" /> Established 1998
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Pioneering <span className="text-primary-600 relative inline-block">
              Healthcare
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C50.6667 5.33333 119.6 -3.2 198 6" stroke="#BBDEFB" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span> Excellence
          </motion.h1>
        </div>
        
        {/* Updated: Team collaboration image with oval shape */}
        <div className="mb-16 max-w-4xl mx-auto">
          <AnimatedCard delay={250} className="shadow-xl rounded-full overflow-hidden border-8 border-white">
            <div className="relative">
              <BlurImage 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Medical professionals collaborating"
                className="w-full h-[400px] object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 w-full text-center">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                  <Star className="text-yellow-500 h-5 w-5 fill-yellow-500" />
                  <span className="font-semibold text-gray-900">Top-Rated Medical Care</span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
        
        {/* Grid layout with overlapping elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Stats panel on the left */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <AnimatedCard delay={300} className="relative z-20">
                <Card className="backdrop-blur-sm border-0 shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Users className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-gray-900">1M+</p>
                          <p className="text-gray-600">Patients Served</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Award className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-gray-900">25+</p>
                          <p className="text-gray-600">Years of Excellence</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Heart className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-gray-900">98%</p>
                          <p className="text-gray-600">Patient Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
              
              <AnimatedCard delay={500} className="relative z-10">
                <Button 
                  size="lg" 
                  className="w-full group text-lg py-6"
                  onClick={() => {
                    const journeySection = document.getElementById('our-journey');
                    journeySection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Our Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </AnimatedCard>
            </div>
          </div>
          
          {/* Central image that breaks the grid */}
          <div className="md:col-span-1 relative z-20 -mt-8 md:mt-0">
            <AnimatedCard 
              delay={200} 
              className="w-full h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl transform md:-translate-y-12"
            >
              <BlurImage 
                src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="HealthHub medical team collaborating" 
                className="w-full h-full object-cover"
              />
            </AnimatedCard>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Star className="text-yellow-500 h-5 w-5 fill-yellow-500" />
                <span className="font-semibold text-gray-900">Top-Rated Medical Care</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right side content */}
          <div className="md:col-span-1">
            <AnimatedCard delay={400} className="relative z-20">
              <Card className="backdrop-blur-sm border-0 shadow-lg overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-2 h-full bg-primary-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-primary-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Specialists</h4>
                        <p className="text-gray-600 text-sm">Over 200 specialists across all disciplines</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-primary-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cutting-Edge Technology</h4>
                        <p className="text-gray-600 text-sm">State-of-the-art equipment and facilities</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-primary-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                        <p className="text-gray-600 text-sm">Patient-centered approach with empathy</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-primary-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Comprehensive Care</h4>
                        <p className="text-gray-600 text-sm">Complete solutions from prevention to specialized treatment</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={() => {
                        const leadersSection = document.getElementById('our-leadership');
                        leadersSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Meet Our Leadership
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
        
        {/* Locations banner - full width */}
        <div className="mt-16 relative z-10">
          <AnimatedCard delay={600} className="bg-primary-600/90 text-white rounded-2xl p-8 backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center flex flex-col items-center justify-center">
                <MapPin className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-semibold">12 Locations</h3>
                <p className="text-primary-100">Serving communities nationwide</p>
              </div>
              
              <div className="text-center flex flex-col items-center justify-center md:border-x border-primary-400/30">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-semibold">200+ Specialists</h3>
                <p className="text-primary-100">Expert doctors across disciplines</p>
              </div>
              
              <div className="text-center flex flex-col items-center justify-center">
                <Heart className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-semibold">Comprehensive Care</h3>
                <p className="text-primary-100">From prevention to specialized treatment</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
