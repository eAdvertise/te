import { Home, Building, Hammer, Palette, TreePine, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Luxury Villa Construction",
      description:
        "Custom-designed Mediterranean villas featuring traditional architecture, infinity pools, and breathtaking sea views.",
    },
    {
      icon: Building,
      title: "Residential Developments",
      description:
        "Premium apartment complexes and townhouse developments with shared amenities and community spaces.",
    },
    {
      icon: Hammer,
      title: "Property Renovation",
      description:
        "Complete renovation of existing properties, preserving character while adding modern comforts.",
    },
    {
      icon: Palette,
      title: "Interior Design",
      description:
        "Curated Mediterranean interiors featuring local materials, artisan craftsmanship, and elegant finishes.",
    },
    {
      icon: TreePine,
      title: "Landscape Architecture",
      description:
        "Beautiful gardens with native plants, outdoor living spaces, and sustainable irrigation systems.",
    },
    {
      icon: Wrench,
      title: "Project Management",
      description:
        "End-to-end project oversight ensuring on-time delivery, budget adherence, and quality control.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground">
            From initial concept to final handover, we provide complete property 
            development services tailored to the Mediterranean lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
