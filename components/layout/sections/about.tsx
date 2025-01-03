import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-40">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h3>
          <p className="text-muted-foreground text-lg mb-6">
            {`
                At ROMPIT, we're a passionate team of developers, designers, and
            innovators dedicated to reshaping the gaming and blockchain
            landscape. Established with a vision to fuse creativity with
            technology, we specialize in delivering next-generation games and
            scalable blockchain solutions.`}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <CardContent className="text-muted-foreground p-0">
                To inspire, innovate, and empower through exceptional game
                development and seamless integration of Web3 and blockchain
                technologies.
              </CardContent>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <CardContent className="text-muted-foreground p-0">
                Revolutionizing Decentralized Web! Empowering Users and
                Developers in the Web3 Ecosystem.
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="p-8 bg-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Innovation Meets Imagination
            </h3>
            <p>
              {`We're transforming the digital frontier with cutting-edge game
              development and pioneering solutions in Web3 and blockchain
              technology.`}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
