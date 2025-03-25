
import { Phone } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import { useAppointmentCall } from "@/hooks/use-appointment-call";

// Emergency contact number (using the same as appointment for simplicity)
const EMERGENCY_PHONE = "+1-800-555-0123";

const EmergencyContact = () => {
  const { handleAppointmentClick } = useAppointmentCall();

  return (
    <AnimatedCard className="px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-600 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                24/7 Emergency Care
              </h3>
              <p className="mb-6 text-primary-100">
                Our emergency department is staffed around the clock with experienced doctors and nurses ready to provide immediate care.
              </p>
              <a
                href={`tel:${EMERGENCY_PHONE}`}
                onClick={handleAppointmentClick}
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-medium rounded-md shadow-md hover:bg-primary-50 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency: 800-555-0123
              </a>
            </div>
            <div className="hidden md:block h-full bg-primary-700">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default EmergencyContact;
