
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "@/components/ui/motion";
import BlurImage from "@/components/ui/BlurImage";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { 
  Calendar, 
  Clock,
  User, 
  Award, 
  GraduationCap,
  Stethoscope, 
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Heart,
  Share2,
  Star,
  ExternalLink,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Hospital's main contact number
const HOSPITAL_PHONE = "+1-800-555-0123";

const doctorsData = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    title: "Chief of Cardiology",
    experience: "15+",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    education: [
      { degree: "M.D.", institution: "Harvard Medical School", year: "2008" },
      { degree: "Cardiology Fellowship", institution: "Mayo Clinic", year: "2012" }
    ],
    stats: [
      { label: "Experience", value: "15+ years" },
      { label: "Surgeries", value: "500+" },
      { label: "Patients", value: "5,000+" }
    ],
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. Her approach combines cutting-edge techniques with compassionate patient care.",
    expertise: [
      { name: "Preventive Cardiology", description: "Heart disease prevention through lifestyle and medication" },
      { name: "Interventional Procedures", description: "Minimally invasive cardiac procedures" },
      { name: "Heart Failure Management", description: "Comprehensive treatment plans for heart failure patients" },
      { name: "Cardiac Rehabilitation", description: "Programs to improve heart health after cardiac events" }
    ],
    schedule: [
      { day: "Monday", hours: "9:00 AM - 4:00 PM" },
      { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 4:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" }
    ],
    contact: {
      email: "sarah.johnson@medicalhub.com",
      phone: "+1 (555) 123-4567",
      office: "Medical Center, Suite 304"
    }
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    title: "Neurological Specialist",
    experience: "12+",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    education: [
      { degree: "M.D.", institution: "Johns Hopkins University", year: "2011" },
      { degree: "Neurology Residency", institution: "Stanford Medical Center", year: "2015" }
    ],
    stats: [
      { label: "Experience", value: "12+ years" },
      { label: "Procedures", value: "300+" },
      { label: "Patients", value: "3,000+" }
    ],
    bio: "Dr. Michael Chen is a respected neurologist specializing in treating complex neurological disorders. With over 12 years of experience, he has developed innovative approaches to diagnosing and managing conditions affecting the brain and nervous system.",
    expertise: [
      { name: "Stroke Management", description: "Acute treatment and recovery strategies" },
      { name: "Headache Disorders", description: "Diagnosis and treatment of migraines and other headaches" },
      { name: "Epilepsy Care", description: "Seizure management and treatment options" },
      { name: "Movement Disorders", description: "Treatment for Parkinson's and related conditions" }
    ],
    schedule: [
      { day: "Monday", hours: "8:00 AM - 3:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 3:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "8:00 AM - 2:00 PM" }
    ],
    contact: {
      email: "michael.chen@medicalhub.com",
      phone: "+1 (555) 234-5678",
      office: "Medical Center, Suite 212"
    }
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    title: "Lead Pediatrician",
    experience: "10+",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    education: [
      { degree: "M.D.", institution: "Columbia University", year: "2013" },
      { degree: "Pediatric Residency", institution: "Children's Hospital of Philadelphia", year: "2016" }
    ],
    stats: [
      { label: "Experience", value: "10+ years" },
      { label: "Patients", value: "4,000+" },
      { label: "Consultations", value: "8,000+" }
    ],
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. With over 10 years of experience, she focuses on developmental health, preventive care, and building lasting relationships with families.",
    expertise: [
      { name: "Well-Child Care", description: "Comprehensive preventive health visits" },
      { name: "Developmental Assessments", description: "Monitoring growth and developmental milestones" },
      { name: "Adolescent Medicine", description: "Healthcare for teens and young adults" },
      { name: "Behavioral Health", description: "ADHD and other behavioral concerns" }
    ],
    schedule: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" }
    ],
    contact: {
      email: "emily.rodriguez@medicalhub.com",
      phone: "+1 (555) 345-6789",
      office: "Medical Center, Suite 156"
    }
  },
  {
    id: "4",
    name: "Dr. Robert Wilson",
    specialty: "Orthopedics",
    title: "Senior Orthopedic Surgeon",
    experience: "20+",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    education: [
      { degree: "M.D.", institution: "University of Pennsylvania", year: "2003" },
      { degree: "Orthopedic Surgery Fellowship", institution: "Mass General Hospital", year: "2008" }
    ],
    stats: [
      { label: "Experience", value: "20+ years" },
      { label: "Surgeries", value: "1,000+" },
      { label: "Patients", value: "7,000+" }
    ],
    bio: "Dr. Robert Wilson is a highly skilled orthopedic surgeon with over 20 years of experience in treating musculoskeletal conditions. He specializes in joint replacement, sports medicine, and minimally invasive surgical techniques.",
    expertise: [
      { name: "Joint Replacement", description: "Hip and knee replacement surgery" },
      { name: "Sports Medicine", description: "Treatment for athletic injuries" },
      { name: "Arthroscopic Surgery", description: "Minimally invasive procedures" },
      { name: "Trauma Care", description: "Treatment of fractures and injuries" }
    ],
    schedule: [
      { day: "Monday", hours: "8:00 AM - 4:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 4:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 4:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 4:00 PM" },
      { day: "Friday", hours: "8:00 AM - 12:00 PM" }
    ],
    contact: {
      email: "robert.wilson@medicalhub.com",
      phone: "+1 (555) 456-7890",
      office: "Medical Center, Suite 422"
    }
  },
  {
    id: "5",
    name: "Dr. Jessica Parker",
    specialty: "Dermatology",
    title: "Chief Dermatologist",
    experience: "8+",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    education: [
      { degree: "M.D.", institution: "Yale School of Medicine", year: "2015" },
      { degree: "Dermatology Residency", institution: "NYU Langone", year: "2019" }
    ],
    stats: [
      { label: "Experience", value: "8+ years" },
      { label: "Procedures", value: "750+" },
      { label: "Patients", value: "3,500+" }
    ],
    bio: "Dr. Jessica Parker is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is passionate about skin health and helping patients achieve their best skin through customized treatment plans.",
    expertise: [
      { name: "Medical Dermatology", description: "Treatment of skin conditions like eczema and psoriasis" },
      { name: "Skin Cancer Screening", description: "Early detection and treatment of skin cancer" },
      { name: "Cosmetic Procedures", description: "Non-invasive rejuvenation treatments" },
      { name: "Pediatric Dermatology", description: "Skin care for children and adolescents" }
    ],
    schedule: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" }
    ],
    contact: {
      email: "jessica.parker@medicalhub.com",
      phone: "+1 (555) 567-8901",
      office: "Medical Center, Suite 230"
    }
  },
  {
    id: "6",
    name: "Dr. David Kim",
    specialty: "General Medicine",
    title: "Primary Care Physician",
    experience: "14+",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    education: [
      { degree: "M.D.", institution: "University of California, San Francisco", year: "2009" },
      { degree: "Internal Medicine Residency", institution: "UCSF Medical Center", year: "2012" }
    ],
    stats: [
      { label: "Experience", value: "14+ years" },
      { label: "Consultations", value: "10,000+" },
      { label: "Patients", value: "6,000+" }
    ],
    bio: "Dr. David Kim is a dedicated primary care physician committed to preventative care and managing chronic conditions. With over 14 years of experience, he focuses on building long-term relationships with his patients and providing comprehensive healthcare.",
    expertise: [
      { name: "Preventive Medicine", description: "Proactive health management and screenings" },
      { name: "Chronic Disease Management", description: "Care for diabetes, hypertension, and other conditions" },
      { name: "Geriatric Care", description: "Specialized healthcare for older adults" },
      { name: "Wellness Consultation", description: "Lifestyle and nutrition counseling" }
    ],
    schedule: [
      { day: "Monday", hours: "8:00 AM - 4:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 4:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 4:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 4:00 PM" },
      { day: "Friday", hours: "8:00 AM - 2:00 PM" }
    ],
    contact: {
      email: "david.kim@medicalhub.com",
      phone: "+1 (555) 678-9012",
      office: "Medical Center, Suite 180"
    }
  },
  {
    id: "7",
    name: "Dr. Amanda Nelson",
    specialty: "Oncology",
    title: "Senior Oncologist",
    experience: "16+",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    education: [
      { degree: "M.D.", institution: "Duke University School of Medicine", year: "2007" },
      { degree: "Oncology Fellowship", institution: "Memorial Sloan Kettering", year: "2011" }
    ],
    stats: [
      { label: "Experience", value: "16+ years" },
      { label: "Cases", value: "2,000+" },
      { label: "Research Papers", value: "35+" }
    ],
    bio: "Dr. Amanda Nelson is a compassionate oncologist dedicated to cancer treatment and research. With over 16 years of experience, she specializes in developing personalized treatment plans using the latest advances in cancer therapy.",
    expertise: [
      { name: "Medical Oncology", description: "Treatment using chemotherapy and targeted therapies" },
      { name: "Cancer Prevention", description: "Risk assessment and preventive strategies" },
      { name: "Clinical Trials", description: "Access to innovative treatment options" },
      { name: "Survivorship Care", description: "Follow-up care for cancer survivors" }
    ],
    schedule: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "9:00 AM - 1:00 PM" }
    ],
    contact: {
      email: "amanda.nelson@medicalhub.com",
      phone: "+1 (555) 789-0123",
      office: "Medical Center, Suite 350"
    }
  },
  {
    id: "8",
    name: "Dr. Thomas Reyes",
    specialty: "Psychiatry",
    title: "Chief of Psychiatry",
    experience: "11+",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    education: [
      { degree: "M.D.", institution: "University of Pennsylvania", year: "2012" },
      { degree: "Psychiatry Residency", institution: "Massachusetts General Hospital", year: "2016" }
    ],
    stats: [
      { label: "Experience", value: "11+ years" },
      { label: "Patients", value: "3,200+" },
      { label: "Consultations", value: "6,000+" }
    ],
    bio: "Dr. Thomas Reyes is a dedicated psychiatrist focusing on mental health and well-being. With over 11 years of experience, he provides comprehensive psychiatric care using evidence-based approaches combined with compassion and understanding.",
    expertise: [
      { name: "Mood Disorders", description: "Treatment for depression and bipolar disorder" },
      { name: "Anxiety Disorders", description: "Management of anxiety, OCD, and related conditions" },
      { name: "Psychotherapy", description: "Individual therapy for various mental health issues" },
      { name: "Medication Management", description: "Psychiatric medication optimization" }
    ],
    schedule: [
      { day: "Monday", hours: "10:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "12:00 PM - 8:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" }
    ],
    contact: {
      email: "thomas.reyes@medicalhub.com",
      phone: "+1 (555) 890-1234",
      office: "Medical Center, Suite 275"
    }
  }
];

const MinimalistDoctorProfile = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const [doctor, setDoctor] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showMoreBio, setShowMoreBio] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Function to generate Google review URL
  const getGoogleReviewUrl = (doctorName: string) => {
    // This creates a Google search query for the doctor with "review" appended
    // It's a simple approach since actual Google Review links require Place IDs
    const searchQuery = encodeURIComponent(`${doctorName} doctor review`);
    return `https://www.google.com/search?q=${searchQuery}`;
  };

  const handleAppointmentClick = () => {
    if (!isMobile) {
      toast({
        title: "Call for Appointment",
        description: `Please call ${HOSPITAL_PHONE} to book an appointment`,
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      const foundDoctor = doctorsData.find(d => d.id === doctorId);
      setDoctor(foundDoctor || doctorsData[0]);
      setIsLoading(false);
    }, 500);
  }, [doctorId]);

  if (isLoading || !doctor) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse h-20 w-20 rounded-full bg-primary-100"></div>
          <div className="text-lg text-primary-600">Loading doctor profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute top-0 right-0 w-full md:w-[60%] h-[75%] bg-primary-50 rounded-bl-[80px] z-0"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[60px] md:rounded-[80px] rotate-6 bg-gradient-to-br from-blue-100 to-primary-100 z-0"></div>
                <div className="relative z-10 rounded-[40px] md:rounded-[60px] overflow-hidden border-4 border-white shadow-xl w-64 h-80 md:w-80 md:h-96">
                  <BlurImage 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
                <div className="absolute -bottom-2 right-0 bg-white rounded-full shadow-lg p-3 z-20">
                  <Badge variant="outline" className="bg-primary-50 border-primary-100 text-primary-800 px-3 py-1.5 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {doctor.experience} Years
                  </Badge>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-7 space-y-6 text-center md:text-left"
            >
              <div>
                <Badge variant="secondary" className="mb-3">
                  {doctor.specialty}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h1>
                <p className="text-xl text-primary-800 font-medium">
                  {doctor.title}
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 pt-2">
                <Card className="bg-white border-0 shadow-sm overflow-hidden">
                  <CardContent className="p-3 flex flex-col items-center">
                    <User className="h-5 w-5 text-primary-600 mb-1" />
                    <p className="text-lg md:text-xl font-bold text-gray-900">{doctor.stats[0].value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{doctor.stats[0].label}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-sm overflow-hidden">
                  <CardContent className="p-3 flex flex-col items-center">
                    <Stethoscope className="h-5 w-5 text-primary-600 mb-1" />
                    <p className="text-lg md:text-xl font-bold text-gray-900">{doctor.stats[1].value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{doctor.stats[1].label}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-sm overflow-hidden">
                  <CardContent className="p-3 flex flex-col items-center">
                    <Award className="h-5 w-5 text-primary-600 mb-1" />
                    <p className="text-lg md:text-xl font-bold text-gray-900">{doctor.stats[2].value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{doctor.stats[2].label}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                <GraduationCap className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {doctor.education[0].degree} - {doctor.education[0].institution}
                  </p>
                </div>
              </div>
              
              <div className="pt-4 flex flex-wrap gap-3">
                <Button size="lg" className="gap-2 rounded-full w-full sm:w-auto" asChild>
                  <Link to="#details">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 rounded-full w-full sm:w-auto hidden md:flex" 
                  asChild
                >
                  <a 
                    href={`tel:${doctor.contact?.phone || HOSPITAL_PHONE}`} 
                    onClick={handleAppointmentClick}
                  >
                    <Phone className="h-4 w-4" />
                    Book Appointment
                  </a>
                </Button>

                {/* Google Review Button */}
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 rounded-full w-full sm:w-auto bg-white text-primary-600 border-primary-600 hover:bg-primary-50" 
                  asChild
                >
                  <a 
                    href={getGoogleReviewUrl(doctor.name)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Star className="h-4 w-4 mr-1" />
                    Review on Google
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <Link to="#details" className="flex flex-col items-center text-gray-400 hover:text-primary-600 transition-colors">
              <p className="text-sm mb-2">Scroll for more</p>
              <ChevronDown className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <main id="details" className="container mx-auto px-4 py-12 space-y-16">
        <AnimatedCard id="about">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="text-primary-600" />
              About Dr. {doctor.name.split(' ')[1]}
            </h2>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  {showMoreBio ? doctor.bio : `${doctor.bio.split('.')[0]}.`}
                </p>
                {doctor.bio.split('.').length > 1 && (
                  <Button 
                    variant="link" 
                    onClick={() => setShowMoreBio(!showMoreBio)}
                    className="mt-2 p-0 h-auto text-primary-600"
                  >
                    {showMoreBio ? 'Show Less' : 'Read More'}
                  </Button>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-100 md:hidden">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary-600" />
                    Education
                  </h3>
                  <div className="space-y-3">
                    {doctor.education.map((edu, index) => (
                      <div key={index} className="flex flex-col">
                        <p className="font-medium text-gray-900">{edu.degree}</p>
                        <p className="text-sm text-gray-600">{edu.institution}, {edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedCard>
        
        <AnimatedCard id="expertise" delay={100}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Stethoscope className="text-primary-600" />
              Areas of Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctor.expertise.map((area, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden border-0 shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{area.name}</h3>
                        <p className="text-sm text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard id="schedule" delay={200}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-primary-600" />
              Availability & Timings
            </h2>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary-600" /> 
                      Weekly Schedule
                    </h3>
                    <div className="space-y-2">
                      {doctor.schedule.map((slot, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                          <p className="font-medium text-gray-900">{slot.day}</p>
                          <p className="text-gray-600 text-sm">{slot.hours}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      Location
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {doctor.contact.office}<br />
                      Medical Center<br />
                      123 Healthcare Avenue
                    </p>
                    
                    {/* Add Google Maps link for the hospital */}
                    <Button size="sm" variant="outline" className="mt-2 gap-1" asChild>
                      <a 
                        href={`https://www.google.com/maps/search/${encodeURIComponent('Hospital near ' + doctor.contact.office)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        View on Google Maps
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedCard>
      </main>
      
      <Footer />
    </div>
  );
};

export default MinimalistDoctorProfile;
