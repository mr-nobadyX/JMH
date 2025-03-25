
import { MapPin, Navigation } from "lucide-react";

const ContactMap = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
        <MapPin className="h-6 w-6 text-primary-600 mr-2" />
        Find Us
      </h2>
      <div className="flex items-start mb-4">
        <p className="text-gray-600">123 Healthcare Blvd, Medical City, CA 12345</p>
      </div>
      <div className="h-[400px] rounded-lg overflow-hidden border border-gray-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1647427857671!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hospital Location"
          className="rounded-lg"
        ></iframe>
        <div className="absolute bottom-4 right-4">
          <a 
            href="https://maps.google.com/?q=New+York,+NY,+USA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-white px-4 py-2 rounded-md shadow-md text-primary-600 font-medium hover:bg-primary-50 transition-colors"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
