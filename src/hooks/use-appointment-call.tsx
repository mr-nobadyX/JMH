
import { useIsMobile } from "./use-mobile";
import { useToast } from "./use-toast";

// Hospital's main contact number
export const HOSPITAL_PHONE = "+1-800-555-0123";

export function useAppointmentCall() {
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

  return {
    phoneNumber: HOSPITAL_PHONE,
    handleAppointmentClick
  };
}
