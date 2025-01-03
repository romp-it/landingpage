import { AboutSection } from "@/components/layout/sections/about";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { icons } from "lucide-react";

export const metadata = {
  title: "Rompit Technologies",
  description: "Rompit Technologies is a software development company",
  icons: ["/rompit.png"],
  openGraph: {
    type: "website",
    url: "https://github.com/romp-it",
    title: "Rompit Technologies",
    description: "gituhb account for Rompit Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Rompit Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@romp-it",
    title: "Rompit Technologies",
    description: "Twitter account for Rompit Technologies",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <TestimonialSection /> */}
      <TeamSection />
      <CommunitySection />
      {/* <PricingSection /> */}
      <ContactSection />
      {/* <FAQSection /> */}
      {/* <FooterSection /> */}
    </>
  );
}
