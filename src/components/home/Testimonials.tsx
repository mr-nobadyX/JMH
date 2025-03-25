import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Star, ExternalLink } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Jessica Thompson",
    role: "Patient",
    testimonial: "I've been a patient at HealthHub for over 5 years and have always received exceptional care. The staff is friendly and the doctors are knowledgeable and attentive.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Martinez",
    role: "Patient",
    testimonial: "The emergency care I received was outstanding. From the moment I arrived, I was treated with compassion and respect. Thank you to the entire team for your dedication.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Lee",
    role: "Parent",
    testimonial: "My son's pediatrician is amazing! She takes the time to listen to our concerns and explains everything clearly. We feel fortunate to have found such a caring doctor.",
    rating: 4,
  },
  {
    id: 4,
    name: "Robert Johnson",
    role: "Patient",
    testimonial: "After my surgery, the follow-up care was excellent. The nurses checked on me regularly and my surgeon visited daily. I'm grateful for the personalized care I received.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Wilson",
    role: "Patient",
    testimonial: "The specialists at HealthHub worked together seamlessly to address my complex medical condition. Their collaborative approach was impressive and effective.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Patient",
    testimonial: "As someone with chronic health issues, finding the right healthcare team is essential. HealthHub has provided consistent, thoughtful care that has significantly improved my quality of life.",
    rating: 4,
  },
  {
    id: 7,
    name: "Sophia Rodriguez",
    role: "Parent",
    testimonial: "The pediatric department at HealthHub is amazing. They made my daughter feel at ease during what could have been a scary experience for a child.",
    rating: 5,
  },
  {
    id: 8,
    name: "Daniel Washington",
    role: "Family Member",
    testimonial: "My elderly father receives care at HealthHub, and I've been impressed by how the staff accommodates his needs and communicates clearly with our family.",
    rating: 4,
  },
  {
    id: 9,
    name: "Jennifer Lee",
    role: "Patient",
    testimonial: "The emergency care I received was outstanding. The doctors acted quickly and efficiently, which made a difficult situation much easier to handle.",
    rating: 5,
  },
  {
    id: 10,
    name: "Christopher Robinson",
    role: "Patient",
    testimonial: "The staff at HealthHub took the time to explain my insurance coverage and help me understand my financial responsibilities. This transparency was refreshing.",
    rating: 4,
  },
  {
    id: 11,
    name: "Nicole Brown",
    role: "Parent",
    testimonial: "When my daughter needed specialized care, HealthHub connected us with the perfect specialist who made a significant difference in her treatment.",
    rating: 5,
  },
  {
    id: 12,
    name: "Jason Kim",
    role: "Patient",
    testimonial: "The rehabilitation services at HealthHub helped me recover from a sports injury faster than I expected. The therapists were knowledgeable and motivating.",
    rating: 5,
  },
  {
    id: 13,
    name: "Lisa Martinez",
    role: "Patient",
    testimonial: "I was nervous about my procedure, but the team at HealthHub was so reassuring and professional that my anxiety quickly disappeared.",
    rating: 5,
  },
  {
    id: 14,
    name: "Andrew Taylor",
    role: "Patient",
    testimonial: "The telehealth services offered by HealthHub are convenient and effective. I received excellent care without having to leave my home.",
    rating: 4,
  },
  {
    id: 15,
    name: "Sarah Wilson",
    role: "Patient",
    testimonial: "From the reception staff to the medical professionals, everyone at HealthHub treats patients with respect and kindness. It makes a significant difference in the healthcare experience.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  const maxIndex = testimonials.length - displayCount;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDisplayCount(3);
      } else if (width >= 768) {
        setDisplayCount(2);
      } else {
        setDisplayCount(1);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <section className="section-padding px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-gray-900 mb-4">
              Patient <span className="text-primary-600">Testimonials</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Hear what our patients have to say about their experience with our healthcare services.
            </p>
            <Button className="mt-4" size="sm" asChild>
              <a href="https://www.google.com/maps/place/Your+Hospital+Name" target="_blank" rel="noopener noreferrer">
                Review us on Google <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prev}
              className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / displayCount)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={testimonial.id}
                className={`px-3 min-w-full md:min-w-[50%] lg:min-w-[33.333%]`}
                delay={index * 100}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-shadow h-full flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{testimonial.testimonial}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
