
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BlurImage from "../ui/BlurImage";
import AnimatedCard from "../ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    delay: 100
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    delay: 200
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    delay: 300
  },
  {
    id: "4",
    name: "Dr. Robert Wilson",
    specialty: "Orthopedics",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    delay: 400
  }
];

const Doctors = () => {
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();

  return (
    <section className="section-padding px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-gray-900 mb-4">
              Our Expert <span className="text-primary-600">Doctors</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Meet our highly qualified medical professionals committed to providing exceptional care.
            </p>
          </div>
          <Link 
            to="/doctors" 
            className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors"
          >
            View all doctors
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doctor) => (
            <AnimatedCard key={doctor.id} delay={doctor.delay} className="group">
              <div className="bg-white rounded-xl overflow-hidden card-shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <BlurImage
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg">{doctor.name}</h3>
                  <p className="text-primary-600 mb-4">{doctor.specialty}</p>
                  <div className="flex flex-wrap gap-2">
                    <Link 
                      to={`/doctors/${doctor.id}`} 
                      className="text-sm text-gray-600 inline-flex items-center hover:text-primary-600 transition-colors"
                    >
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a 
                      href={`tel:${phoneNumber}`}
                      onClick={handleAppointmentClick}
                      className="text-sm text-primary-600 inline-flex items-center hover:text-primary-700 transition-colors ml-4"
                    >
                      Book Appointment
                      <Phone className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
