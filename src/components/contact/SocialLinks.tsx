
import { Facebook, Twitter, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
  { icon: Twitter, href: "#", label: "Twitter", color: "bg-sky-50 text-sky-600 hover:bg-sky-100" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100" },
  { icon: Instagram, href: "#", label: "Instagram", color: "bg-pink-50 text-pink-600 hover:bg-pink-100" },
];

const SocialLinks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-8 inline-flex items-center gap-2">
          <div className="h-px w-8 bg-primary-200"></div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Connect With Us
          </h2>
          <div className="h-px w-8 bg-primary-200"></div>
        </div>
        <p className="max-w-lg mx-auto text-gray-600 mb-8">
          Follow us on social media to stay updated with the latest news, events, and health tips from our medical center.
        </p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${link.color} p-4 rounded-full transition-colors duration-300`}
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-12 flex justify-center items-center gap-2 text-sm text-gray-500">
          <Heart className="h-4 w-4 text-red-400" />
          <p>We appreciate your feedback and look forward to serving you</p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
