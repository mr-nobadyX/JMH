
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Heart, Brain, Baby, Activity, Clock, Plus, Check, Phone, Shield, Award, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const Services = () => {
  const [featuredServiceImg, setFeaturedServiceImg] = useState(true);
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* New Unique Hero Section */}
        <section className="bg-white py-24 px-4 md:px-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Left Content */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <AnimatedCard>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-600 mb-6">
                    <Award className="mr-1 h-4 w-4" /> Excellence in Healthcare
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Specialized Care <br />
                    <span className="text-primary-600">For Your Wellbeing</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                    Our comprehensive medical services combine cutting-edge technology with compassionate care, 
                    designed to address your unique health needs at every stage of life.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-10">
                    <Button size="lg" className="rounded-full bg-primary-600 hover:bg-primary-700 shadow-lg" asChild>
                      <a href="#all-services">
                        Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full" asChild>
                      <a 
                        href={`tel:${phoneNumber}`}
                        onClick={handleAppointmentClick}
                        className="flex items-center"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Book an Appointment
                      </a>
                    </Button>
                  </div>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="h-5 w-5 text-primary-600" />, text: "Specialized Care" },
                      { icon: <Users className="h-5 w-5 text-primary-600" />, text: "Expert Physicians" },
                      { icon: <Clock className="h-5 w-5 text-primary-600" />, text: "24/7 Availability" },
                      { icon: <Award className="h-5 w-5 text-primary-600" />, text: "Top-rated Facilities" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-primary-50 p-2 rounded-full mr-3">
                          {feature.icon}
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
              
              {/* Right Side - Service Cards */}
              <div className="md:col-span-5">
                <AnimatedCard delay={200} className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Heart className="h-6 w-6 text-white" />,
                        title: "Cardiology",
                        bg: "bg-red-500"
                      },
                      {
                        icon: <Brain className="h-6 w-6 text-white" />,
                        title: "Neurology",
                        bg: "bg-blue-500"
                      },
                      {
                        icon: <Baby className="h-6 w-6 text-white" />,
                        title: "Pediatrics",
                        bg: "bg-green-500"
                      },
                      {
                        icon: <Stethoscope className="h-6 w-6 text-white" />,
                        title: "General Medicine",
                        bg: "bg-purple-500"
                      }
                    ].map((service, index) => (
                      <Link 
                        key={index}
                        to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group"
                      >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                          <div className={`${service.bg} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                            {service.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {service.title}
                          </h3>
                          <ArrowRight className="h-5 w-5 text-primary-600 mt-auto self-end opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Background decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-50 rounded-full -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-50 rounded-full -z-10"></div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* Key Healthcare Services */}
        <section id="all-services" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of medical services to meet all your healthcare needs.
              </p>
            </AnimatedCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Stethoscope />,
                  title: "General Medicine",
                  description: "Primary care services with expert physicians for routine check-ups and chronic disease management.",
                  delay: 100,
                  id: "general-medicine"
                },
                {
                  icon: <Heart />,
                  title: "Cardiology",
                  description: "Advanced heart care treatments including diagnostic tests, interventions, and cardiac rehabilitation.",
                  delay: 200,
                  id: "cardiology"
                },
                {
                  icon: <Activity />,
                  title: "Orthopedics",
                  description: "Comprehensive care for bones, joints, muscles, and sports injuries with surgical and non-surgical options.",
                  delay: 300,
                  id: "orthopedics"
                },
                {
                  icon: <Baby />,
                  title: "Pediatrics",
                  description: "Specialized healthcare for infants, children, and adolescents in a child-friendly environment.",
                  delay: 400,
                  id: "pediatrics"
                },
                {
                  icon: <Brain />,
                  title: "Neurology",
                  description: "Expert diagnosis and treatment of conditions affecting the brain, spinal cord, and nervous system.",
                  delay: 500,
                  id: "neurology"
                },
                {
                  icon: <Clock />,
                  title: "Emergency Care",
                  description: "24/7 critical medical assistance with rapid response teams for urgent health concerns.",
                  delay: 600,
                  id: "emergency-care"
                }
              ].map((service, index) => (
                <AnimatedCard key={index} delay={service.delay} className="group">
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="bg-primary-50 rounded-lg p-3 w-fit mb-4">
                      <div className="text-primary-600">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <Link 
                      to={`/services/${service.id}`}
                      className="text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700 transition-colors"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service */}
        <section className="py-20 px-4 md:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedCard>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Advanced Robotic <span className="text-primary-600">Surgery</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our state-of-the-art robotic surgery program offers minimally invasive surgical options with enhanced precision, resulting in faster recoveries and better outcomes.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Minimally invasive procedures with smaller incisions",
                    "Reduced pain and faster recovery times",
                    "Greater surgical precision and control",
                    "Lower risk of complications and infections",
                    "Shorter hospital stays"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary-600 hover:bg-primary-700" asChild>
                  <a href="tel:+1-800-555-0123" onClick={handleAppointmentClick}>Book a Consultation</a>
                </Button>
              </AnimatedCard>
              <AnimatedCard delay={300} className="order-first md:order-last">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="Advanced robotic surgery"
                    className="w-full h-[350px] md:h-[450px] object-cover"
                    onError={() => setFeaturedServiceImg(false)}
                  />
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-primary-600">Our Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to providing exceptional care with a focus on your wellbeing and comfort.
              </p>
            </AnimatedCard>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "State-of-the-Art Equipment",
                  description: "Advanced technology for accurate diagnosis and effective treatment.",
                  delay: 100
                },
                {
                  title: "Experienced Doctors",
                  description: "Highly qualified medical professionals with years of specialized experience.",
                  delay: 200
                },
                {
                  title: "Patient-Centered Care",
                  description: "Personalized healthcare plans focused on your unique needs and preferences.",
                  delay: 300
                },
                {
                  title: "24/7 Availability",
                  description: "Round-the-clock care for emergencies and urgent medical assistance.",
                  delay: 400
                }
              ].map((feature, index) => (
                <AnimatedCard key={index} delay={feature.delay}>
                  <div className="bg-white rounded-xl p-6 border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="bg-primary-50 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                      <Plus className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedCard>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Medical Assistance? Book an Appointment Today!
              </h2>
              <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto">
                Our team of healthcare professionals is ready to provide you with the care you need.
              </p>
              <Button 
                className="bg-white text-primary-600 hover:bg-primary-50" 
                size="lg" 
                asChild
              >
                <a 
                  href={`tel:${phoneNumber}`}
                  onClick={handleAppointmentClick}
                  className="inline-flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Now
                </a>
              </Button>
            </AnimatedCard>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-primary-600">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our services.
              </p>
            </AnimatedCard>
            
            <AnimatedCard>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What insurance plans do you accept?",
                    answer: "We accept most major insurance plans, including Medicare and Medicaid. We recommend contacting our billing department to verify coverage for your specific plan before your appointment."
                  },
                  {
                    question: "How do I schedule an appointment?",
                    answer: "You can schedule an appointment by calling our office, using our online booking system, or visiting our facility in person. Our staff will help you find a convenient time that works with your schedule."
                  },
                  {
                    question: "What should I bring to my first appointment?",
                    answer: "Please bring your insurance card, photo ID, list of current medications, medical history records if available, and any referral forms if required by your insurance. Arriving 15 minutes early to complete paperwork is recommended."
                  },
                  {
                    question: "Do I need a referral to see a specialist?",
                    answer: "Some specialists require a referral from your primary care physician, while others accept direct appointments. This often depends on your insurance plan's requirements. Contact our office for specific information about the specialist you wish to see."
                  },
                  {
                    question: "What are your emergency services hours?",
                    answer: "Our emergency department is open 24 hours a day, 7 days a week, including holidays. We provide immediate care for all medical emergencies with no appointment necessary."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
