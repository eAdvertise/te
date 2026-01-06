import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    company: [{
      name: "About Us",
      href: "#about"
    }],
    services: [{
      name: "Villa Construction",
      href: "#services"
    }, {
      name: "Renovations",
      href: "#services"
    }, {
      name: "Interior Design",
      href: "#services"
    }, {
      name: "Landscaping",
      href: "#services"
    }],
    projects: [{
      name: "New Projects",
      href: "#new-projects"
    }, {
      name: "Completed Projects",
      href: "#projects"
    }]
  };
  const socialLinks = [{
    icon: Facebook,
    href: "#"
  }, {
    icon: Instagram,
    href: "#"
  }, {
    icon: Linkedin,
    href: "#"
  }, {
    icon: Twitter,
    href: "#"
  }];
  return <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Mediterranean Estates
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Quality property construction and development on the Mediterranean coast. 
     
 
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} tE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;