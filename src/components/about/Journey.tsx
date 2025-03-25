
import { Flag, Clock, Book, Award, Lightbulb, Rocket, MapPin } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const TimelineItem = ({ year, title, description, icon, delay }: TimelineItemProps) => (
  <AnimatedCard delay={delay} className="mb-3 relative">
    <div className="flex items-start">
      {/* Timeline dot and line */}
      <div className="hidden md:flex flex-col items-center mr-3">
        <div className="h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-white z-10">
          {icon}
        </div>
        <div className="w-0.5 bg-primary-200 h-full absolute top-6 bottom-0 left-3 -z-10"></div>
      </div>
      
      {/* Card content */}
      <Card className="flex-1 border-l-2 border-primary-500 hover:shadow-md transition-all duration-300">
        <CardContent className="p-2.5">
          <div className="md:hidden h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center mb-1.5 text-white">
            {icon}
          </div>
          <div className="text-primary-600 font-bold text-xs mb-0.5">{year}</div>
          <h3 className="text-xs font-semibold mb-0.5 text-gray-900">{title}</h3>
          <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </div>
  </AnimatedCard>
);

const Journey = () => {
  const isMobile = useIsMobile();
  
  const timelineItems = [
    {
      year: "2000",
      title: "Foundation",
      description: "HealthHub was founded with a vision to provide accessible healthcare.",
      icon: <Flag className="h-3 w-3" />,
      delay: 100
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened three new branches across the state.",
      icon: <MapPin className="h-3 w-3" />,
      delay: 200
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Implemented state-of-the-art medical technology.",
      icon: <Lightbulb className="h-3 w-3" />,
      delay: 300
    },
    {
      year: "2015",
      title: "Research Center",
      description: "Established a research center for medical advancement.",
      icon: <Book className="h-3 w-3" />,
      delay: 400
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Received international accreditation for excellence.",
      icon: <Award className="h-3 w-3" />,
      delay: 500
    },
    {
      year: "2023",
      title: "Present Day",
      description: "Continuing to grow with exceptional care.",
      icon: <Rocket className="h-3 w-3" />,
      delay: 600
    },
  ];

  return (
    <section id="our-journey" className="py-5 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Our Journey
          </h2>
          <p className="text-xs text-gray-600 max-w-xl mx-auto">
            Tracing HealthHub's evolution from founding to leadership in healthcare.
          </p>
        </AnimatedCard>

        {isMobile ? (
          <div className="mt-3">
            <Carousel className="w-full">
              <CarouselContent>
                {timelineItems.map((item, index) => (
                  <CarouselItem key={index} className="basis-4/5">
                    <div className="p-1">
                      <Card className="border-l-2 border-primary-500">
                        <CardContent className="p-2.5">
                          <div className="h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center mb-1.5 mx-auto text-white">
                            {item.icon}
                          </div>
                          <div className="text-primary-600 font-bold text-xs mb-0.5 text-center">{item.year}</div>
                          <h3 className="text-xs font-semibold mb-0.5 text-gray-900 text-center">{item.title}</h3>
                          <p className="text-xs text-gray-600 text-center">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-2">
                <CarouselPrevious className="static transform-none mx-1 h-6 w-6" />
                <CarouselNext className="static transform-none mx-1 h-6 w-6" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="relative mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  delay={item.delay}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;
