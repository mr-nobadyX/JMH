
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At HealthHub, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed">
              We may collect personal information that you provide directly to us, such as your name, email address, phone number,
              and any other information you choose to provide when you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Create an account</li>
              <li>Request an appointment</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer service</li>
              <li>Complete a survey or provide feedback</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and manage appointments and inquiries</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information.
              Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by HealthHub.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any
              third-party websites or services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Your Data Protection Rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may have rights concerning your personal data, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict or object to our processing of your data</li>
              <li>The right to data portability</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@healthhub.com" className="text-primary-600 hover:underline">privacy@healthhub.com</a>
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

export default PrivacyPolicy;
