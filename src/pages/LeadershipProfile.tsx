import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { ArrowLeft, Award, GraduationCap, Briefcase, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

// Sample leadership data
const leadershipData = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    role: "Chief Executive Officer",
    bio: "With over 20 years of experience in healthcare management and a background in cardiology, Dr. Chen has been leading HealthHub since 2015.",
    fullBio: "Dr. Emily Chen brings more than 20 years of healthcare leadership experience to her role as CEO of HealthHub. After completing her medical training at Harvard Medical School and practicing as a cardiologist for a decade, she transitioned to healthcare administration with a vision to transform patient care through innovation and compassion.\n\nUnder her leadership, HealthHub has expanded services across multiple locations, implemented cutting-edge medical technologies, and significantly improved patient satisfaction scores. Dr. Chen is particularly passionate about healthcare accessibility, preventive medicine, and building a patient-centered healthcare system.",
    imageSrc: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    education: [
      { degree: "M.D.", institution: "Harvard Medical School", year: "1998" },
      { degree: "MBA", institution: "Stanford Business School", year: "2008" },
      { degree: "B.S. Biology", institution: "Yale University", year: "1994" }
    ],
    expertise: [
      "Healthcare Administration",
      "Strategic Planning",
      "Medical Innovation",
      "Cardiology"
    ],
    accomplishments: [
      "Expanded HealthHub from 3 to 15 locations",
      "Implemented AI-assisted diagnostic tools across all centers",
      "Reduced operational costs by 25% while improving care quality",
      "Named 'Healthcare Executive of the Year' in 2022"
    ],
    contact: {
      email: "emily.chen@healthhub.com",
      phone: "(555) 123-4567",
      office: "HealthHub HQ, Suite 400"
    },
    socialMedia: {
      linkedin: "linkedin.com/in/emilychen",
      twitter: "twitter.com/dr_emilychen"
    }
  },
  {
    id: "2",
    name: "Dr. James Wilson",
    role: "Chief Medical Officer",
    bio: "A renowned surgeon specializing in neurological procedures, Dr. Wilson ensures our medical practices meet the highest standards.",
    fullBio: "Dr. James Wilson is an internationally recognized neurosurgeon who joined HealthHub as Chief Medical Officer in 2017. With over 15 years of clinical practice and research experience, he oversees all medical operations and ensures that HealthHub delivers care that meets the highest quality and safety standards.\n\nDr. Wilson completed his residency at Mayo Clinic and has published extensively on minimally invasive neurosurgical techniques. He continues to practice neurosurgery part-time while leading our medical teams. Under his guidance, HealthHub has implemented evidence-based protocols that have significantly improved patient outcomes across all specialties.",
    imageSrc: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    education: [
      { degree: "M.D.", institution: "Johns Hopkins University", year: "2002" },
      { degree: "Neurosurgery Residency", institution: "Mayo Clinic", year: "2008" },
      { degree: "B.S. Neuroscience", institution: "Duke University", year: "1998" }
    ],
    expertise: [
      "Neurosurgery",
      "Medical Quality Assurance",
      "Clinical Research",
      "Medical Education"
    ],
    accomplishments: [
      "Developed revolutionary minimally invasive brain surgery technique",
      "Published 45+ peer-reviewed articles in medical journals",
      "Decreased surgical complication rates by 35% across HealthHub",
      "Recipient of the National Medal of Medical Excellence"
    ],
    contact: {
      email: "james.wilson@healthhub.com",
      phone: "(555) 234-5678",
      office: "HealthHub Medical Center, Suite 320"
    },
    socialMedia: {
      linkedin: "linkedin.com/in/jameswilsonmd",
      twitter: "twitter.com/dr_jameswilson"
    }
  },
  {
    id: "3",
    name: "Sarah Johnson",
    role: "Chief Operations Officer",
    bio: "Sarah brings her expertise in healthcare operations and strategic planning to ensure efficient and effective service delivery.",
    fullBio: "Sarah Johnson joined HealthHub as Chief Operations Officer in 2018, bringing 18 years of experience in healthcare operations management. With a background in both hospital administration and healthcare consulting, she oversees all operational aspects of HealthHub's facilities, including staffing, workflow optimization, and resource allocation.\n\nSarah has a reputation for transforming healthcare operations through data-driven decision making and innovative process improvements. Her implementation of lean methodology throughout HealthHub has resulted in shorter wait times, improved resource utilization, and enhanced patient experience while reducing operational costs.",
    imageSrc: "https://images.unsplash.com/photo-1605125950585-8b4f4a51589d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    education: [
      { degree: "MBA", institution: "Wharton School of Business", year: "2005" },
      { degree: "M.H.A.", institution: "University of Michigan", year: "2000" },
      { degree: "B.S. Healthcare Administration", institution: "Georgetown University", year: "1998" }
    ],
    expertise: [
      "Healthcare Operations",
      "Process Optimization",
      "Strategic Planning",
      "Financial Management"
    ],
    accomplishments: [
      "Reduced patient wait times by 45% across all departments",
      "Implemented integrated EHR system across all HealthHub facilities",
      "Achieved operational cost savings of $3.2 million annually",
      "Named in '40 Under 40' healthcare leaders by Healthcare Executive magazine"
    ],
    contact: {
      email: "sarah.johnson@healthhub.com",
      phone: "(555) 345-6789",
      office: "HealthHub HQ, Suite 350"
    },
    socialMedia: {
      linkedin: "linkedin.com/in/sarahjohnson",
      twitter: "twitter.com/sarahjohnson_hh"
    }
  },
  {
    id: "4",
    name: "Dr. Michael Patel",
    role: "Director of Research",
    bio: "Leading our research initiatives, Dr. Patel focuses on translating cutting-edge medical research into improved patient care.",
    fullBio: "Dr. Michael Patel has led HealthHub's Research Department since 2016, driving innovation and the adoption of evidence-based practices throughout our healthcare system. With a Ph.D. in Biomedical Engineering and an M.D. specializing in Internal Medicine, he bridges the gap between clinical research and practical applications in patient care.\n\nDr. Patel oversees all research partnerships, clinical trials, and innovation initiatives at HealthHub. His team's work has resulted in numerous patents, publications, and most importantly, improvements in treatment protocols that have directly benefited thousands of patients. He is particularly passionate about personalized medicine and using data analytics to customize healthcare delivery.",
    imageSrc: "https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    education: [
      { degree: "M.D.", institution: "University of California, San Francisco", year: "2003" },
      { degree: "Ph.D. Biomedical Engineering", institution: "MIT", year: "2001" },
      { degree: "B.S. Biochemistry", institution: "Stanford University", year: "1996" }
    ],
    expertise: [
      "Clinical Research",
      "Biomedical Innovation",
      "Data-Driven Healthcare",
      "Translational Medicine"
    ],
    accomplishments: [
      "Led development of 5 patented medical technologies",
      "Secured $12M in research grants over 5 years",
      "Published 67 research papers in top medical journals",
      "Established research partnerships with 3 major universities"
    ],
    contact: {
      email: "michael.patel@healthhub.com",
      phone: "(555) 456-7890",
      office: "HealthHub Research Center, Suite 200"
    },
    socialMedia: {
      linkedin: "linkedin.com/in/michaelpatelmd",
      twitter: "twitter.com/dr_michaelpatel"
    }
  }
];

const LeadershipProfile = () => {
  const { leaderId } = useParams<{ leaderId: string }>();
  const [leader, setLeader] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    
    setTimeout(() => {
      // Find the leader by ID from the URL parameter
      const foundLeader = leadershipData.find(l => l.id === leaderId);
      setLeader(foundLeader || leadershipData[0]);
      setIsLoading(false);
    }, 300);
  }, [leaderId]);

  if (isLoading || !leader) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse h-16 w-16 rounded-full bg-primary-100"></div>
          <div className="text-lg text-primary-600">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img 
                src={leader.imageSrc} 
                alt={leader.name} 
                className="h-full w-full object-cover md:h-full md:w-full"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <Badge className="mb-2 w-fit">{leader.role}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{leader.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{leader.fullBio}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="text-primary-600 h-5 w-5" />
                <h2 className="text-xl font-bold text-gray-900">Education</h2>
              </div>
              <ul className="space-y-4">
                {leader.education.map((edu: any, index: number) => (
                  <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <p className="font-semibold text-gray-900">{edu.degree}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-5">
                <Briefcase className="text-primary-600 h-5 w-5" />
                <h2 className="text-xl font-bold text-gray-900">Areas of Expertise</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {leader.expertise.map((area: string, index: number) => (
                  <Badge key={index} variant="outline" className="bg-primary-50 text-primary-700">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-5">
                <Award className="text-primary-600 h-5 w-5" />
                <h2 className="text-xl font-bold text-gray-900">Key Accomplishments</h2>
              </div>
              <ul className="space-y-3">
                {leader.accomplishments.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-600 text-lg font-bold">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-600 h-5 w-5" />
                  <a href={`mailto:${leader.contact.email}`} className="text-gray-700 hover:text-primary-600 transition-colors">
                    {leader.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-600 h-5 w-5" />
                  <a href={`tel:${leader.contact.phone}`} className="text-gray-700 hover:text-primary-600 transition-colors">
                    {leader.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary-600 h-5 w-5" />
                  <span className="text-gray-700">{leader.contact.office}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Linkedin className="text-primary-600 h-5 w-5" />
                  <a href={`https://${leader.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition-colors">
                    {leader.socialMedia.linkedin}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="text-primary-600 h-5 w-5" />
                  <a href={`https://${leader.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition-colors">
                    {leader.socialMedia.twitter}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        
        <div className="text-center mt-12 mb-8">
          <Button asChild size="lg">
            <Link to="/about">
              Back to Leadership Team
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeadershipProfile;
