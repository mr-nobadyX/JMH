
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to HealthHub ("we," "our," or "us"). These Terms and Conditions govern your use of our website and services. 
              By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, 
              you may not access our website or use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Services</h2>
            <p className="leading-relaxed">
              HealthHub provides information about healthcare services, medical professionals, and facilities. 
              Our content is for informational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have 
              regarding medical conditions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
            <p className="leading-relaxed">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
              Notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              The content, features, and functionality of our website, including text, graphics, logos, and images, 
              are owned by HealthHub and are protected by copyright, trademark, and other intellectual property laws. 
              You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. User Content</h2>
            <p className="leading-relaxed">
              By posting content on our website, you grant us a non-exclusive, royalty-free license to use, 
              reproduce, and display your content in connection with our services. You are solely responsible 
              for your content and must not violate any third-party rights or post illegal, defamatory, or offensive material.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              HealthHub and its directors, employees, and affiliates will not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from your use of our website or services. 
              In no event shall our total liability exceed the amount you paid for our services, if any.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="leading-relaxed">
              We may revise these Terms at any time by updating this page. It is your responsibility to review these 
              Terms periodically as your continued use of our website constitutes acceptance of any changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:legal@healthhub.com" className="text-primary-600 hover:underline">legal@healthhub.com</a>
              <br />
              123 Healthcare Blvd, Medical City, CA 12345
              <br />
              (800) 555-0123
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
