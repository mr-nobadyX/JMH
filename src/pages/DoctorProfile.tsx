import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  Star, 
  Award, 
  User, 
  Stethoscope, 
  BookOpen, 
  MessageSquare,
  CheckCircle, 
  ChevronRight, 
  Calendar as CalendarIcon,
  ArrowRight,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import AnimatedCard from "@/components/ui/AnimatedCard";
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
    rating: 4.9,
    totalReviews: 156,
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. Her approach combines cutting-edge techniques with compassionate patient care.",
    education: [
      { degree: "M.D.", institution: "Harvard Medical School", year: "2008" },
      { degree: "Cardiology Fellowship", institution: "Mayo Clinic", year: "2012" }
    ],
    languages: ["English", "Spanish", "French"],
    specializations: [
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
    },
    awards: [
      "Excellence in Cardiology Award, American Heart Association, 2020",
      "Top Cardiologist, National Medical Association, 2018",
      "Research Innovation Award, Cardiovascular Institute, 2016"
    ],
    publications: [
      { title: "Advances in Preventive Cardiology: A Comprehensive Review", journal: "Journal of Cardiology", year: "2021" },
      { title: "Long-term Outcomes of Minimally Invasive Cardiac Procedures", journal: "Medical Science Review", year: "2019" },
      { title: "Novel Approaches to Heart Failure Management", journal: "Cardiovascular Therapeutics", year: "2017" }
    ],
    reviews: [
      { id: "r1", name: "John Smith", date: "March 15, 2023", rating: 5, comment: "Dr. Johnson was incredibly thorough and took the time to explain my condition in detail. Her expertise and compassionate approach made a difficult diagnosis much easier to handle." },
      { id: "r2", name: "Emily Chen", date: "February 8, 2023", rating: 5, comment: "I've been seeing Dr. Johnson for years. She always stays current with the latest treatments and has helped me significantly improve my heart health." },
      { id: "r3", name: "Michael Rodriguez", date: "January 22, 2023", rating: 4, comment: "Very knowledgeable doctor who takes time with patients. The wait time can sometimes be long, but the quality of care is worth it." }
    ]
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    title: "Neurological Specialist",
    experience: "12+",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    totalReviews: 132,
    bio: "Dr. Michael Chen is a respected neurologist specializing in treating complex neurological disorders. With over 12 years of experience, he has developed innovative approaches to diagnosing and managing conditions affecting the brain and nervous system.",
    education: [
      { degree: "M.D.", institution: "Johns Hopkins University", year: "2011" },
      { degree: "Neurology Residency", institution: "Stanford Medical Center", year: "2015" }
    ],
    languages: ["English", "Mandarin", "Cantonese"],
    specializations: [
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
    },
    awards: [
      "Innovator in Neurology Award, American Academy of Neurology, 2021",
      "Excellence in Patient Care, Regional Hospital Association, 2019",
      "Research Contribution Award, Neurological Institute, 2017"
    ],
    publications: [
      { title: "Modern Approaches to Stroke Prevention and Treatment", journal: "Neurology Today", year: "2022" },
      { title: "Advances in Headache Disorder Management", journal: "Journal of Neurological Sciences", year: "2020" },
      { title: "Long-term Outcomes in Epilepsy Treatment", journal: "Epilepsia", year: "2018" }
    ],
    reviews: [
      { id: "r1", name: "Robert Johnson", date: "April 2, 2023", rating: 5, comment: "Dr. Chen is exceptional. He took the time to listen to all my concerns and developed a comprehensive treatment plan that has improved my quality of life." },
      { id: "r2", name: "Sarah Williams", date: "March 11, 2023", rating: 5, comment: "After seeing multiple neurologists, Dr. Chen was the one who finally properly diagnosed my condition. His expertise is truly impressive." },
      { id: "r3", name: "James Liu", date: "February 15, 2023", rating: 4, comment: "Very thorough and knowledgeable. The office can get busy, but Dr. Chen always gives his full attention during appointments." }
    ]
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    title: "Lead Pediatrician",
    experience: "10+",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
    totalReviews: 198,
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. With over 10 years of experience, she focuses on developmental health, preventive care, and building lasting relationships with families.",
    education: [
      { degree: "M.D.", institution: "Columbia University", year: "2013" },
      { degree: "Pediatric Residency", institution: "Children's Hospital of Philadelphia", year: "2016" }
    ],
    languages: ["English", "Spanish", "Portuguese"],
    specializations: [
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
    },
    awards: [
      "Pediatrician of the Year, Children's Health Foundation, 2022",
      "Excellence in Family-Centered Care Award, 2020",
      "Community Outreach Recognition, Pediatric Society, 2018"
    ],
    publications: [
      { title: "Addressing Developmental Delays in Early Childhood", journal: "Pediatrics Journal", year: "2021" },
      { title: "Adolescent Mental Health: A Comprehensive Approach", journal: "Journal of Adolescent Medicine", year: "2019" },
      { title: "Preventive Care Strategies for Modern Families", journal: "Family Health Review", year: "2017" }
    ],
    reviews: [
      { id: "r1", name: "Amanda Brown", date: "May 5, 2023", rating: 5, comment: "Dr. Rodriguez is amazing with children. My son who is usually terrified of doctors actually looks forward to his appointments with her." },
      { id: "r2", name: "David Garcia", date: "April 18, 2023", rating: 5, comment: "We've been going to Dr. Rodriguez since my daughter was born. She's knowledgeable, patient, and truly cares about our family." },
      { id: "r3", name: "Lisa Thompson", date: "March 29, 2023", rating: 4, comment: "Great pediatrician who takes time to address all concerns. The office can get busy during flu season, but the care is worth it." }
    ]
  },
  {
    id: "4",
    name: "Dr. Robert Wilson",
    specialty: "Orthopedics",
    title: "Senior Orthopedic Surgeon",
    experience: "20+",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4.7,
    totalReviews: 175,
    bio: "Dr. Robert Wilson is a highly skilled orthopedic surgeon with over 20 years of experience in treating musculoskeletal conditions. He specializes in joint replacement, sports medicine, and minimally invasive surgical techniques.",
    education: [
      { degree: "M.D.", institution: "University of Pennsylvania", year: "2003" },
      { degree: "Orthopedic Surgery Fellowship", institution: "Mass General Hospital", year: "2008" }
    ],
    languages: ["English", "German"],
    specializations: [
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
    },
    awards: [
      "Orthopedic Surgeon of the Year, Medical Excellence Awards, 2021",
      "Innovation in Joint Replacement, Orthopedic Society, 2019",
      "Best Sports Medicine Specialist, Regional Healthcare Awards, 2017"
    ],
    publications: [
      { title: "Advances in Minimally Invasive Joint Replacement", journal: "Journal of Orthopedic Surgery", year: "2022" },
      { title: "Long-term Outcomes of Sports-Related Injuries", journal: "Sports Medicine Review", year: "2020" },
      { title: "New Techniques in Arthroscopic Surgery", journal: "Surgical Innovations", year: "2018" }
    ],
    reviews: [
      { id: "r1", name: "Thomas Miller", date: "June 10, 2023", rating: 5, comment: "Dr. Wilson performed my knee replacement surgery, and I couldn't be happier with the results. His expertise and clear communication throughout the process were exceptional." },
      { id: "r2", name: "Jennifer Adams", date: "May 22, 2023", rating: 4, comment: "Very knowledgeable surgeon. Dr. Wilson takes time to explain procedures and answer questions. Highly recommend for orthopedic issues." },
      { id: "r3", name: "Mark Johnson", date: "April 15, 2023", rating: 5, comment: "After a serious sports injury, Dr. Wilson got me back on my feet. His approach to treatment and rehabilitation was comprehensive and effective." }
    ]
  },
  {
    id: "5",
    name: "Dr. Jessica Parker",
    specialty: "Dermatology",
    title: "Chief Dermatologist",
    experience: "8+",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4.8,
    totalReviews: 142,
    bio: "Dr. Jessica Parker is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is passionate about skin health and helping patients achieve their best skin through customized treatment plans.",
    education: [
      { degree: "M.D.", institution: "Yale School of Medicine", year: "2015" },
      { degree: "Dermatology Residency", institution: "NYU Langone", year: "2019" }
    ],
    languages: ["English", "Italian"],
    specializations: [
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
    },
    awards: [
      "Rising Star in Dermatology, American Academy of Dermatology, 2022",
      "Excellence in Patient Care, Medical Association, 2020",
      "Research Contribution Award, Dermatology Foundation, 2018"
    ],
    publications: [
      { title: "Advanced Treatments for Chronic Skin Conditions", journal: "Dermatology Today", year: "2022" },
      { title: "Early Detection Methods for Skin Cancers", journal: "Journal of Dermatologic Surgery", year: "2020" },
      { title: "Pediatric Dermatology: A Comprehensive Approach", journal: "Pediatric Dermatology Review", year: "2019" }
    ],
    reviews: [
      { id: "r1", name: "Rachel Green", date: "July 8, 2023", rating: 5, comment: "Dr. Parker transformed my skin. After struggling with a chronic condition for years, her treatment plan finally brought relief. She's incredibly knowledgeable and caring." },
      { id: "r2", name: "Daniel White", date: "June 20, 2023", rating: 5, comment: "Excellent dermatologist who takes a holistic approach to skin health. Dr. Parker addresses not just the symptoms but the underlying causes." },
      { id: "r3", name: "Olivia Martin", date: "May 15, 2023", rating: 4, comment: "Very thorough skin checks and great bedside manner. The office can be busy, but Dr. Parker never rushes through appointments." }
    ]
  },
  {
    id: "6",
    name: "Dr. David Kim",
    specialty: "General Medicine",
    title: "Primary Care Physician",
    experience: "14+",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.9,
    totalReviews: 189,
    bio: "Dr. David Kim is a dedicated primary care physician committed to preventative care and managing chronic conditions. With over 14 years of experience, he focuses on building long-term relationships with his patients and providing comprehensive healthcare.",
    education: [
      { degree: "M.D.", institution: "University of California, San Francisco", year: "2009" },
      { degree: "Internal Medicine Residency", institution: "UCSF Medical Center", year: "2012" }
    ],
    languages: ["English", "Korean", "Japanese"],
    specializations: [
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
    },
    awards: [
      "Physician of the Year, Regional Medical Association, 2022",
      "Excellence in Primary Care, Healthcare Foundation, 2020",
      "Patient's Choice Award, Medical Center, 2018"
    ],
    publications: [
      { title: "Integrated Approaches to Chronic Disease Management", journal: "Primary Care Today", year: "2021" },
      { title: "Preventive Screenings: Impact on Long-term Health Outcomes", journal: "Journal of Preventive Medicine", year: "2019" },
      { title: "Geriatric Care in the Modern Era", journal: "Geriatric Medicine Review", year: "2017" }
    ],
    reviews: [
      { id: "r1", name: "William Harris", date: "August 12, 2023", rating: 5, comment: "Dr. Kim takes time to listen and never rushes appointments. He's been managing my diabetes for years, and my health has improved significantly under his care." },
      { id: "r2", name: "Nancy Taylor", date: "July 25, 2023", rating: 5, comment: "The best primary care doctor I've ever had. Dr. Kim is thorough, knowledgeable, and truly cares about his patients' well-being." },
      { id: "r3", name: "Steven Chen", date: "June 30, 2023", rating: 4, comment: "Great doctor who takes a holistic approach to healthcare. He's helped me make lifestyle changes that have improved my overall health." }
    ]
  },
  {
    id: "7",
    name: "Dr. Amanda Nelson",
    specialty: "Oncology",
    title: "Senior Oncologist",
    experience: "16+",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 4.9,
    totalReviews: 167,
    bio: "Dr. Amanda Nelson is a compassionate oncologist dedicated to cancer treatment and research. With over 16 years of experience, she specializes in developing personalized treatment plans using the latest advances in cancer therapy.",
    education: [
      { degree: "M.D.", institution: "Duke University School of Medicine", year: "2007" },
      { degree: "Oncology Fellowship", institution: "Memorial Sloan Kettering", year: "2011" }
    ],
    languages: ["English", "French"],
    specializations: [
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
    },
    awards: [
      "Excellence in Oncology Research, Cancer Research Foundation, 2021",
      "Compassionate Care Award, Patient Advocacy Group, 2019",
      "Innovation in Cancer Treatment, Medical Sciences Academy, 2017"
    ],
    publications: [
      { title: "Advances in Targeted Cancer Therapies", journal: "Journal of Clinical Oncology", year: "2022" },
      { title: "Personalized Medicine in Cancer Treatment", journal: "Cancer Research", year: "2020" },
      { title: "Long-term Outcomes in Survivorship Care", journal: "Survivorship Today", year: "2018" }
    ],
    reviews: [
      { id: "r1", name: "Patricia Wilson", date: "September 5, 2023", rating: 5, comment: "Dr. Nelson guided me through one of the most difficult periods of my life. Her expertise and compassionate approach to cancer treatment made all the difference." },
      { id: "r2", name: "Richard Moore", date: "August 18, 2023", rating: 5, comment: "An exceptional oncologist who stays on top of the latest research and treatment options. Dr. Nelson gives hope while remaining realistic." },
      { id: "r3", name: "Susan Campbell", date: "July 10, 2023", rating: 4, comment: "Dr. Nelson provided excellent care throughout my treatment journey. She's thorough, knowledgeable, and genuinely caring." }
    ]
  },
  {
    id: "8",
    name: "Dr. Thomas Reyes",
    specialty: "Psychiatry",
    title: "Chief of Psychiatry",
    experience: "11+",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    rating: 4.8,
    totalReviews: 154,
    bio: "Dr. Thomas Reyes is a dedicated psychiatrist focusing on mental health and well-being. With over 11 years of experience, he provides comprehensive psychiatric care using evidence-based approaches combined with compassion and understanding.",
    education: [
      { degree: "M.D.", institution: "University of Pennsylvania", year: "2012" },
      { degree: "Psychiatry Residency", institution: "Massachusetts General Hospital", year: "2016" }
    ],
    languages: ["English", "Spanish"],
    specializations: [
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
    },
    awards: [
      "Excellence in Psychiatric Care, Mental Health Foundation, 2022",
      "Community Mental Health Award, Psychiatric Association, 2020",
      "Innovation in Therapy Techniques, Medical Academy, 2018"
    ],
    publications: [
      { title: "Modern Approaches to Mood Disorder Treatment", journal: "Journal of Psychiatry", year: "2021" },
      { title: "Anxiety Management in the Digital Age", journal: "Mental Health Today", year: "2019" },
      { title: "Integrative Approaches in Psychiatric Care", journal: "Psychiatric Medicine Review", year: "2017" }
    ],
    reviews: [
      { id: "r1", name: "Sarah Johnson", date: "October 15, 2023", rating: 5, comment: "Dr. Reyes has been instrumental in helping me manage my anxiety. His approach is thoughtful, evidence-based, and tailored to my specific needs." },
      { id: "r2", name: "Michael Brown", date: "September 22, 2023", rating: 5, comment: "An excellent psychiatrist who truly listens. Dr. Reyes takes the time to understand the whole person, not just symptoms." },
      { id: "r3", name: "Jessica Martinez", date: "August 30, 2023", rating: 4, comment: "Dr. Reyes provides compassionate care with practical strategies for managing mental health challenges. His office is a safe space for healing." }
    ]
  }
];

const DoctorProfile = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const [doctor, setDoctor] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const getGoogleReviewUrl = (doctorName: string) => {
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
    setError(null);
    
    console.log("Current doctorId:", doctorId);
    
    setTimeout(() => {
      if (!doctorId) {
        setError("Doctor ID is missing");
        setIsLoading(false);
        return;
      }
      
      const foundDoctor = doctorsData.find(d => d.id === doctorId);
      console.log("Found doctor:", foundDoctor ? foundDoctor.name : "Not found");
      
      if (foundDoctor) {
        setDoctor(foundDoctor);
      } else {
        setError(`Doctor with ID ${doctorId} not found`);
      }
      
      setIsLoading(false);
    }, 500);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [doctorId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse h-20 w-20 rounded-full bg-primary-100"></div>
          <div className="text-lg text-primary-600">Loading doctor profile...</div>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="flex flex-col items-center gap-4 max-w-md text-center px-4">
          <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
            <User className="h-10 w-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Doctor Not Found</h2>
          <p className="text-gray-600">{error || "The requested doctor profile could not be found. Please check the URL or return to the doctors listing."}</p>
          <Button className="mt-4" asChild>
            <Link to="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Badge variant="minimal" className="py-1.5 px-3">
                  {doctor.specialty}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {doctor.name}
                </h1>
                
                <p className="text-xl text-gray-600">
                  {doctor.title}
                </p>
                
                <div className="max-w-lg">
                  <p className="text-gray-700">
                    {doctor.bio.split('.')[0] + '.'}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1.5 flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-amber-500" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-500">({doctor.totalReviews} reviews)</span>
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1.5 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-primary-500" />
                      <span>{doctor.experience} years experience</span>
                    </Badge>
                  </div>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-3">
                  <Button 
                    asChild
                    onClick={handleAppointmentClick}
                  >
                    <a 
                      href={`tel:${HOSPITAL_PHONE}`}
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Book Appointment
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href={getGoogleReviewUrl(doctor.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Review our doctor on Google
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar className="h-64 w-64 rounded-full border-4 border-white shadow-xl">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary-50">
                    <Mail className="h-5 w-5 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">{doctor.contact.email}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary-50">
                    <Phone className="h-5 w-5 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{doctor.contact.phone}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary-50">
                    <User className="h-5 w-5 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">{doctor.contact.office}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Dr. {doctor.name.split(' ')[1]}</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>{doctor.bio}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Specializations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.specializations.map((spec, i) => (
                    <Card key={i} className="bg-white border border-gray-100">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-full bg-primary-50">
                            <Stethoscope className="h-5 w-5 text-primary-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{spec.name}</h3>
                            <p className="text-gray-600 text-sm">{spec.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Training</h2>
                <div className="space-y-4">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary-50 mt-1">
                        <BookOpen className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}, {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
                <div className="space-y-4">
                  {doctor.awards.map((award, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary-50 mt-1">
                        <Award className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-gray-700">{award}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Research & Publications</h2>
                <div className="space-y-4">
                  {doctor.publications.map((pub, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-md">
                      <h3 className="font-semibold text-gray-900 mb-1">{pub.title}</h3>
                      <p className="text-gray-600 text-sm">{pub.journal}, {pub.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Reviews</h2>
                <div className="space-y-6">
                  {doctor.reviews.map((review) => (
                    <Card key={review.id} className="bg-white border border-gray-100">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                            {Array.from({ length: 5 - review.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-200" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" asChild>
                    <a href={getGoogleReviewUrl(doctor.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Review our doctor on Google
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card id="appointment" className="bg-white border border-gray-100 sticky top-32">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Schedule an Appointment</h2>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">Available Hours</h3>
                      <div className="space-y-2">
                        {doctor.schedule.map((day, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-600">{day.day}</span>
                            <span className="text-gray-900 font-medium">{day.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Languages Spoken</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((lang, i) => (
                          <Badge key={i} variant="secondary" className="px-2.5 py-1 text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full"
                        asChild
                      >
                        <a 
                          href={`tel:${HOSPITAL_PHONE}`}
                          onClick={handleAppointmentClick}
                        >
                          Book Appointment
                        </a>
                      </Button>
                      
                      <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Usually responds within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <AnimatedCard>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Have a question?</h3>
                  <p className="text-gray-600 mb-4">Get in touch with Dr. {doctor.name.split(' ')[1]} directly</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact Now
                    </Link>
                  </Button>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DoctorProfile;
