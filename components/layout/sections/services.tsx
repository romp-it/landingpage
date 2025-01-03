import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  // pro: ProService;
  description: string;
  features: string[];
}

const serviceList: ServiceProps[] = [
  {
    title: "Game Development",
    description: "Create immersive gaming experiences across all platforms",
    features: [
      "Immersive Gameplay Experiences with story-driven design",
      "Cutting-Edge Technology using Unreal Engine and Unity",
      "Multi-Platform Development for PC, console, and mobile",
    ],
    // pro: 1,
  },
  {
    title: "Web3 Integration",
    description: "Empower your gaming platform with blockchain technology",
    features: [
      "Decentralized Gaming Ecosystems with true asset ownership",
      "Smart Contract Solutions for scalable systems",
      "Seamless integration with dApps and gaming platforms",
    ],
    // pro: 1,
  },
  {
    title: "Blockchain Development",
    description: "Custom blockchain solutions for gaming and beyond",
    features: [
      "Tokenized Economy Design and Crypto Integration",
      "NFT Solutions for gaming, art, and collectibles",
      "Custom Public and Private Blockchain Development",
    ],
    // pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Our Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Next-Gen Gaming Solutions
      </h2>
      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-12">
        Revolutionize your gaming experience with cutting-edge technology and
        blockchain integration
      </h3>

      <div className="grid lg:grid-cols-3 gap-8 w-full mx-auto">
        {serviceList.map(({ title, description, features }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-2xl mb-4">{title}</CardTitle>
              <CardDescription className="text-lg mb-4">
                {description}
              </CardDescription>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardHeader>
            {/* <Badge
              // data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              
            </Badge> */}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
