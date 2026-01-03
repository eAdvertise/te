import { CheckCircle2 } from "lucide-react";
const About = () => {
  const features = ["Expert Mediterranean architectural design", "Premium quality materials and craftsmanship", "Sustainable building practices", "Full project management from concept to completion", "Renovation and restoration services", "Custom interior design integration"];
  return <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">Building Mediterranean Excellence </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              tE is a premier property construction and development company specializing 
              renovation of homes or building brand new. Our team of architects, engineers, 
              and craftsmen bring together traditional Mediterranean aesthetics with modern innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From sun-drenched villas overlooking the azure sea to charming townhouses 
              and modern apartments, we create homes that capture the essence of Mediterranean 
              living. Every project reflects our commitment to quality, sustainability, 
              respect to sustainability and timeless design.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>)}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">150+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-muted-foreground">Expert Team</div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">12</div>
                  <div className="text-muted-foreground">Industry Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;