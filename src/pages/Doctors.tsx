import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  CalendarCheck
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    rating: 4.8,
    totalReviews: 132,
    bio: "Dr. Michael Chen is a respected neurologist specializing in treating complex neurological disorders. With over 12 years of experience, he has developed innovative approaches to diagnosing and managing conditions affecting the brain and nervous system.",
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
    rating: 4.9,
    totalReviews: 198,
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. With over 10 years of experience, she focuses on developmental health, preventive care, and building lasting relationships with families.",
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
    rating: 4.7,
    totalReviews: 175,
    bio: "Dr. Robert Wilson is a highly skilled orthopedic surgeon with over 20 years of experience in treating musculoskeletal conditions. He specializes in joint replacement, sports medicine, and minimally invasive surgical techniques.",
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
    rating: 4.8,
    totalReviews: 142,
    bio: "Dr. Jessica Parker is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is passionate about skin health and helping patients achieve their best skin through customized treatment plans.",
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
    rating: 4.9,
    totalReviews: 189,
    bio: "Dr. David Kim is a dedicated primary care physician committed to preventative care and managing chronic conditions. With over 14 years of experience, he focuses on building long-term relationships with his patients and providing comprehensive healthcare.",
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
    rating: 4.9,
    totalReviews: 167,
    bio: "Dr. Amanda Nelson is a compassionate oncologist dedicated to cancer treatment and research. With over 16 years of experience, she specializes in developing personalized treatment plans using the latest advances in cancer therapy.",
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
    rating: 4.8,
    totalReviews: 154,
    bio: "Dr. Thomas Reyes is a dedicated psychiatrist focusing on mental health and well-being. With over 11 years of experience, he provides comprehensive psychiatric care using evidence-based approaches combined with compassion and understanding.",
    contact: {
      email: "thomas.reyes@medicalhub.com",
      phone: "+1 (555) 890-1234",
      office: "Medical Center, Suite 275"
    }
  }
];

const Doctors = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const { toast } = useToast();

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
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filteredDoctors = doctorsData;
    
    // Filter by specialty
    if (selectedSpecialty !== "all") {
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.name.toLowerCase().includes(query) || 
        doctor.specialty.toLowerCase().includes(query)
      );
    }
    
    setDoctors(filteredDoctors);
  }, [searchQuery, selectedSpecialty]);

  const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "General Medicine", "Oncology", "Psychiatry"];

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse h-20 w-20 rounded-full bg-primary-100"></div>
          <div className="text-lg text-primary-600">Loading doctors...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1">Our Medical Staff</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Doctors
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Our team of dedicated healthcare professionals is committed to providing
            exceptional care with expertise across various medical specialties.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name or specialty..."
                className="pl-10 py-6 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="relative min-w-[180px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select 
                className="w-full h-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value.toLowerCase())}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty.toLowerCase()}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="grid" className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <div className="text-sm text-gray-500">
                Showing {doctors.length} doctors
              </div>
              
              <TabsList>
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 2.5H6.5V7.5H1.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 2.5H14.5V7.5H9.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 10.5H6.5V15.5H1.5V10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 10.5H14.5V15.5H9.5V10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Grid
                </TabsTrigger>
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 4H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 8H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 12H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 4H1.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 8H1.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 12H1.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  List
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="grid">
              {doctors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {doctors.map((doctor) => (
                    <Card key={doctor.id} className="border-0 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative bg-primary-50/50 pt-8 px-6 pb-6 text-center">
                          <Badge variant="outline" className="absolute top-4 right-4 bg-white">
                            {doctor.specialty}
                          </Badge>
                          
                          <Avatar className="mx-auto h-28 w-28 border-4 border-white shadow-md">
                            <AvatarImage src={doctor.image} alt={doctor.name} />
                            <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          
                          <h3 className="mt-4 text-xl font-bold text-gray-900">{doctor.name}</h3>
                          <p className="text-gray-600">{doctor.title}</p>
                          
                          <div className="flex items-center justify-center gap-1 mt-2">
                            {Array(5).fill(0).map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(doctor.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">({doctor.totalReviews})</span>
                          </div>
                        </div>
                        
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="h-4 w-4 text-primary-500" />
                            <span className="text-sm">{doctor.contact.office}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="h-4 w-4 text-primary-500" />
                            <span className="text-sm">{doctor.experience} years experience</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <Button variant="outline" asChild>
                              <Link to={`/doctors/${doctor.id}`} className="flex items-center justify-center gap-1">
                                Profile
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                            
                            <Button id="appointment" asChild>
                              <a 
                                href={`tel:${HOSPITAL_PHONE}`}
                                onClick={handleAppointmentClick}
                                className="flex items-center justify-center gap-1"
                              >
                                <CalendarCheck className="h-3.5 w-3.5" />
                                Appointment
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No doctors found matching your search criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSpecialty("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="list">
              {doctors.length > 0 ? (
                <div className="space-y-4">
                  {doctors.map((doctor) => (
                    <Card key={doctor.id} className="border-0 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-64 bg-primary-50/50 p-6 flex flex-col items-center justify-center">
                            <Badge variant="outline" className="mb-4 md:hidden bg-white">
                              {doctor.specialty}
                            </Badge>
                            
                            <Avatar className="h-20 w-20 md:h-28 md:w-28 border-4 border-white shadow-md">
                              <AvatarImage src={doctor.image} alt={doctor.name} />
                              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            
                            <div className="mt-4 text-center">
                              <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                              <p className="text-gray-600">{doctor.title}</p>
                            </div>
                          </div>
                          
                          <div className="flex-1 p-6">
                            <div className="flex flex-wrap justify-between items-start mb-4">
                              <Badge variant="outline" className="hidden md:flex bg-white">
                                {doctor.specialty}
                              </Badge>
                              
                              <div className="flex items-center gap-1">
                                {Array(5).fill(0).map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(doctor.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                                ))}
                                <span className="text-sm text-gray-600 ml-1">({doctor.totalReviews})</span>
                              </div>
                            </div>
                            
                            <p className="text-gray-700 mb-4">
                              {doctor.bio.substring(0, 150)}...
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4 text-primary-500" />
                                <span className="text-sm">{doctor.contact.office}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="h-4 w-4 text-primary-500" />
                                <span className="text-sm">{doctor.experience} years experience</span>
                              </div>
                            </div>
                            
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                              <Button variant="outline" asChild>
                                <Link to={`/doctors/${doctor.id}`} className="flex items-center justify-center gap-1">
                                  View Profile
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </Button>
                              
                              <Button id="appointment" asChild>
                                <a 
                                  href={`tel:${HOSPITAL_PHONE}`}
                                  onClick={handleAppointmentClick}
                                  className="flex items-center justify-center gap-1"
                                >
                                  <CalendarCheck className="h-3.5 w-3.5" />
                                  Book Appointment
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No doctors found matching your search criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSpecialty("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Doctors;
