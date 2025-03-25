
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import SocialLinks from "@/components/contact/SocialLinks";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reach Out <span className="text-primary-600">To Us</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </AnimatedCard>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <AnimatedCard className="lg:col-span-2">
                <ContactForm />
              </AnimatedCard>
              <AnimatedCard delay={200} className="lg:col-span-3">
                <ContactMap />
              </AnimatedCard>
            </div>
          </div>
        </section>
        <SocialLinks />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Contact;
