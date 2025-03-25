
import { Award, Star } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementCardProps {
  title: string;
  issuer: string;
  year: string;
  description: string;
  delay: number;
}

const AchievementCard = ({ title, issuer, year, description, delay }: AchievementCardProps) => (
  <AnimatedCard delay={delay} className="h-full">
    <Card className="h-full border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-between items-start">
          <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
            <Award className="h-5 w-5" />
          </div>
          <span className="text-gray-500 font-medium">{year}</span>
        </div>
        <h3 className="text-xl font-semibold mb-1 text-gray-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-primary-600 mb-3">{issuer}</p>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const Achievements = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized with prestigious awards and accolades.
          </p>
        </AnimatedCard>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AchievementCard
            title="Excellence in Patient Care"
            issuer="American Hospital Association"
            year="2022"
            description="Recognized for outstanding patient satisfaction scores and innovative care protocols."
            delay={100}
          />
          <AchievementCard
            title="Healthcare Innovation Award"
            issuer="Medical Technology Forum"
            year="2021"
            description="Honored for pioneering the implementation of AI-assisted diagnostic tools."
            delay={200}
          />
          <AchievementCard
            title="Top Hospital Award"
            issuer="National Health Standards Council"
            year="2020"
            description="Named among the top 5% of hospitals nationwide for quality and safety standards."
            delay={300}
          />
          <AchievementCard
            title="Community Service Excellence"
            issuer="Regional Healthcare Foundation"
            year="2019"
            description="Acknowledged for extensive community outreach and health education initiatives."
            delay={400}
          />
          <AchievementCard
            title="Environmental Sustainability"
            issuer="Green Healthcare Alliance"
            year="2018"
            description="Recognized for implementing eco-friendly practices and reducing carbon footprint."
            delay={500}
          />
          <AchievementCard
            title="Research Contribution Award"
            issuer="International Medical Research Council"
            year="2017"
            description="Honored for significant contributions to medical research and clinical trials."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
