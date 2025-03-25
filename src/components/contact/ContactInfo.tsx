
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Healthcare Blvd", "Medical City, CA 12345"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["Emergency: (800) 555-0123", "General: (800) 555-0124"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["appointments@healthhub.com", "support@healthhub.com"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday-Friday: 8am-6pm", "Saturday: 9am-1pm"],
    color: "bg-amber-50 text-amber-600",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`${item.color} p-4 rounded-full mb-4`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 mb-1"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
