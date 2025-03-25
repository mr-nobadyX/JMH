
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The care I received at HealthHub was exceptional. The doctors were attentive, and the staff went above and beyond to make me comfortable.",
    name: "Rebecca Thompson",
    location: "San Francisco, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    quote: "After my surgery, the follow-up care was impeccable. The entire team made sure I understood my recovery process and supported me every step of the way.",
    name: "Marcus Johnson",
    location: "Chicago, IL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    quote: "The pediatric department at HealthHub is amazing. They made my son feel at ease during what could have been a scary experience for a child.",
    name: "Sophia Rodriguez",
    location: "Austin, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    quote: "I've been a patient at HealthHub for years, and the quality of care has consistently exceeded my expectations. I wouldn't trust my health to anyone else.",
    name: "David Chen",
    location: "Seattle, WA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
  },
  {
    quote: "The emergency care I received was outstanding. The doctors acted quickly and efficiently, which made a difficult situation much easier to handle.",
    name: "Jennifer Lee",
    location: "Portland, OR",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    quote: "As someone with chronic health issues, finding the right healthcare team is essential. HealthHub has provided consistent, thoughtful care that has significantly improved my quality of life.",
    name: "Michael Stevens",
    location: "Denver, CO",
    rating: 4,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    quote: "The specialists at HealthHub worked together seamlessly to address my complex medical condition. Their collaborative approach was impressive and effective.",
    name: "Sarah Wilson",
    location: "Boston, MA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
  },
  {
    quote: "From the reception staff to the medical professionals, everyone at HealthHub treats patients with respect and kindness. It makes a significant difference in the healthcare experience.",
    name: "Robert Garcia",
    location: "Miami, FL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80",
  },
  {
    quote: "The preventive care program at HealthHub helped me catch a potential health issue early. I'm grateful for their thorough approach to wellness.",
    name: "Emily Jackson",
    location: "Minneapolis, MN",
    rating: 5,
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
  },
  {
    quote: "My elderly father receives care at HealthHub, and I've been impressed by how the staff accommodates his needs and communicates clearly with our family.",
    name: "Daniel Washington",
    location: "Phoenix, AZ",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    quote: "The telehealth services offered by HealthHub are convenient and effective. I received excellent care without having to leave my home.",
    name: "Amanda Parker",
    location: "Nashville, TN",
    rating: 5,
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80",
  },
  {
    quote: "The rehabilitation services at HealthHub helped me recover from a sports injury faster than I expected. The therapists were knowledgeable and motivating.",
    name: "Jason Kim",
    location: "Los Angeles, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
  },
  {
    quote: "When my daughter needed specialized care, HealthHub connected us with the perfect specialist who made a significant difference in her treatment.",
    name: "Nicole Brown",
    location: "Dallas, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
  },
  {
    quote: "The staff at HealthHub took the time to explain my insurance coverage and help me understand my financial responsibilities. This transparency was refreshing.",
    name: "Christopher Robinson",
    location: "Atlanta, GA",
    rating: 4,
    image: "https://images.unsplash.com/photo-1627231764547-db2a5466c839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    quote: "I was nervous about my procedure, but the team at HealthHub was so reassuring and professional that my anxiety quickly disappeared.",
    name: "Lisa Martinez",
    location: "Philadelphia, PA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80",
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

const TestimonialCard = ({ quote, name, location, rating, image }: TestimonialProps) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <StarRating rating={rating} />
    <p className="mt-4 text-gray-600 italic">"{quote}"</p>
    <div className="mt-6 flex items-center">
      <Avatar className="h-12 w-12 mr-4">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  </div>
);

const AboutTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Real stories from people whose lives have been transformed by our care.
          </p>
          <Button className="mx-auto" size="lg" asChild>
            <a href="https://www.google.com/maps/place/Your+Hospital+Name" target="_blank" rel="noopener noreferrer">
              Review us on Google <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </AnimatedCard>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <AnimatedCard delay={index * 100} className="h-full">
                    <TestimonialCard {...testimonial} />
                  </AnimatedCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
