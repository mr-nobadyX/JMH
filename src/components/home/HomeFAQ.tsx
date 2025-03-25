
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedCard from "../ui/AnimatedCard";

const faqs = [
  {
    question: "What are your visiting hours?",
    answer: "Our general visiting hours are from 10:00 AM to 8:00 PM daily. However, specific departments may have different timings which can be checked with the respective ward."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment through our website's booking system, by calling our appointment desk, or by visiting the hospital in person."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans. Please contact our insurance desk for specific information about your coverage."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, our emergency department is open 24/7 and equipped to handle all types of medical emergencies."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your insurance card, photo ID, list of current medications, medical history records if available, and any referral forms if required by your insurance."
  }
];

const HomeFAQ = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and facilities
          </p>
        </AnimatedCard>

        <AnimatedCard>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default HomeFAQ;
