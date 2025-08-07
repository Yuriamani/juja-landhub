import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Shield, Award, Users, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Years of experience in Kenyan real estate with a proven track record of helping families own land legally and affordably."
    },
    {
      icon: Award,
      title: "Prime Locations",
      description: "Carefully selected plots in Juja's most promising areas with excellent growth potential and infrastructure development."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated to making land ownership accessible to every Kenyan with transparent processes and affordable payment plans."
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Based at Greenspot Tower on Eastern Bypass, we're perfectly positioned to serve the greater Juja and Kiambu areas."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-earth-primary mb-6">
              About Crescent Heights LTD
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Crescent Heights LTD is a premier property company specializing in affordable, 
              prime land for investment and settlement in Juja and nearby areas. Based at 
              Greenspot Tower, we are committed to helping Kenyans own land easily and legally, 
              building wealth through strategic real estate investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-earth-primary/10 p-3 rounded-lg group-hover:bg-earth-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-earth-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-earth-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-earth-light rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-earth-primary mb-4">
                Why Choose Crescent Heights LTD?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We understand that owning land is more than just an investment—it's about 
                securing your family's future. Our team is dedicated to making this dream 
                accessible to every Kenyan through transparent processes, competitive pricing, 
                and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="earth" size="lg">
                  View Our Listings
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;