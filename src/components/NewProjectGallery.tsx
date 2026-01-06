import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Flame, ShieldAlert, CreditCard, Refrigerator, Waves, Car, Sun, Fence, Thermometer, Snowflake, ShoppingCart, Building2, UtensilsCrossed, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import chlorakasNew1 from "@/assets/chlorakas-new-1.jpg";
import chlorakasNew2 from "@/assets/chlorakas-new-2.jpg";
import chlorakasNew3 from "@/assets/chlorakas-new-3.jpg";
import chlorakasNew4 from "@/assets/chlorakas-new-4.jpg";
import chlorakasNew5 from "@/assets/chlorakas-new-5.jpg";
import chlorakasNew6 from "@/assets/chlorakas-new-6.jpg";
import chlorakasNew7 from "@/assets/chlorakas-new-7.jpg";
const NewProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState(0);
  const projects = [{
    images: [chlorakasNew2, chlorakasNew7, chlorakasNew3, chlorakasNew1, chlorakasNew4, chlorakasNew5, chlorakasNew6],
    title: "Chlorakas Townhouse Residences",
    location: "Chlorakas, Pafos, Cyprus",
    description: "Central yet Quiet Location, easy access to anywhere",
    specs: "2 & 3 Bedroomed Townhouses • 77.5-115 m² • Communal Pool",
    type: "image" as const
  }, {
    images: [],
    title: "Project Details",
    location: "",
    description: "",
    specs: "",
    type: "info" as const
  }, {
    images: [],
    title: "Facilities",
    location: "",
    description: "",
    specs: "",
    type: "facilities" as const
  }, {
    images: [],
    title: "Project Location",
    location: "Chlorakas, Pafos, Cyprus",
    description: "View the exact location of our new development.",
    specs: "Prime Location • Near the Sea",
    type: "map" as const,
    mapUrl: "https://maps.google.com/maps?q=34.793499,32.416253&z=18&output=embed"
  }, {
    images: [],
    title: "Location Highlights",
    location: "",
    description: "",
    specs: "",
    type: "text" as const
  }];
  const openLightbox = (index: number) => {
    setSelectedProject(index);
    setSelectedImageIndex(0);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
    document.body.style.overflow = "auto";
  };
  const navigateImage = (direction: "prev" | "next") => {
    if (selectedProject === null) return;
    const imagesCount = projects[selectedProject].images.length;
    const newIndex = direction === "next" ? (selectedImageIndex + 1) % imagesCount : (selectedImageIndex - 1 + imagesCount) % imagesCount;
    setSelectedImageIndex(newIndex);
  };
  const navigateCardImage = (e: React.MouseEvent, direction: "prev" | "next") => {
    e.stopPropagation();
    const imagesCount = projects[0].images.length;
    const newIndex = direction === "next" ? (cardImageIndex + 1) % imagesCount : (cardImageIndex - 1 + imagesCount) % imagesCount;
    setCardImageIndex(newIndex);
  };
  return <section id="new-projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            NEW PROJECT
          </h2>
          <p className="text-muted-foreground">
            Discover our upcoming projects currently in development. 
            Stay tuned for more details on these exciting new properties.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
          if (project.type === 'info') {
            return <div key={index} className="rounded-xl overflow-hidden bg-card shadow-sm p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    <p>New Development </p>
                  </div>
                </div>;
          }
          if (project.type === 'facilities') {
            return <div key={index} className="rounded-xl overflow-hidden bg-card shadow-sm p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-primary" />
                      <span>Fire Alarm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-primary" />
                      <span>Security Alarm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>Magnetic Card Entrance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Refrigerator className="w-4 h-4 text-primary" />
                      <span>White Goods Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-primary" />
                      <span>Communal Pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-primary" />
                      <span>Parking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-primary" />
                      <span>Photovoltaic System</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fence className="w-4 h-4 text-primary" />
                      <span>Private Garden</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span>Heating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-primary" />
                      <span>Cooling</span>
                    </div>
                  </div>
                </div>;
          }
          if (project.type === 'text') {
            return <div key={index} className="rounded-xl overflow-hidden bg-card shadow-sm p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>200m from Convenience/Supermarket Stores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-primary" />
                      <span>1.7km from the Sea</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span>120m from the nearest Bank</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-primary" />
                      <span>200m from the nearest Restaurant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-primary" />
                      <span>60m to the nearest Coffee House</span>
                    </div>
                  </div>
                </div>;
          }
          return <div key={index} className={`group cursor-pointer rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`} onClick={() => project.type === 'image' && openLightbox(index)}>
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9] lg:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                  {project.type === 'map' ? <>
                      <iframe src={project.mapUrl} className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Project Location Map" />
                      <a href="https://www.google.com/maps?q=34.793499,32.416253" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 z-10 bg-background/90 text-foreground text-xs px-3 py-1.5 rounded-md hover:bg-background transition-colors shadow-md">
                        View Larger Map
                      </a>
                    </> : <>
                      {project.images.length > 0 && <img src={index === 0 ? project.images[cardImageIndex] : project.images[0]} alt={project.title} className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-contain" />}
                      {index === 0 && project.images.length > 1 && <>
                          <button onClick={e => navigateCardImage(e, "prev")} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full text-foreground hover:bg-background shadow-lg transition-all hover:scale-110 z-10">
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button onClick={e => navigateCardImage(e, "next")} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full text-foreground hover:bg-background shadow-lg transition-all hover:scale-110 z-10">
                            <ChevronRight className="w-6 h-6" />
                          </button>
                          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {project.images.map((_, imgIndex) => <div key={imgIndex} className={`w-2 h-2 rounded-full transition-all ${imgIndex === cardImageIndex ? 'bg-primary-foreground' : 'bg-primary-foreground/40'}`} />)}
                          </div>
                        </>}
                    </>}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                    <h3 className={`font-semibold text-primary-foreground mb-1 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-foreground/90 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <p className="text-primary-foreground/80 text-sm">{project.specs}</p>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Lightbox */}
        {selectedProject !== null && <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
            <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-primary transition-colors z-10">
              <X className="w-8 h-8" />
            </button>

            <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="relative">
                  <img src={projects[selectedProject].images[selectedImageIndex]} alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`} className="w-full rounded-xl shadow-2xl aspect-[4/3] object-cover" />
                  
                  {projects[selectedProject].images.length > 1 && <>
                      <button onClick={e => {
                  e.stopPropagation();
                  navigateImage("prev");
                }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 rounded-full text-foreground hover:bg-background shadow-lg transition-all hover:scale-110">
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button onClick={e => {
                  e.stopPropagation();
                  navigateImage("next");
                }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 rounded-full text-foreground hover:bg-background shadow-lg transition-all hover:scale-110">
                        <ChevronRight className="w-8 h-8" />
                      </button>
                    </>}
                </div>
                
                {/* Thumbnail Strip */}
                {projects[selectedProject].images.length > 1 && <div className="flex gap-2 justify-center">
                    {projects[selectedProject].images.map((image, index) => <button key={index} onClick={() => setSelectedImageIndex(index)} className={`w-16 h-16 rounded-lg overflow-hidden transition-all ${index === selectedImageIndex ? 'ring-2 ring-primary scale-105' : 'opacity-60 hover:opacity-100'}`}>
                        
                      </button>)}
                  </div>}
              </div>

              <div className="text-primary-foreground">
                <h3 className="text-3xl font-serif font-bold mb-2">
                  {projects[selectedProject].title}
                </h3>
                <p className="flex items-center gap-2 text-primary-foreground/70 mb-6">
                  <MapPin className="w-5 h-5" />
                  {projects[selectedProject].location}
                </p>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  {projects[selectedProject].description}
                </p>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-lg text-sm">
                  {projects[selectedProject].specs}
                </div>
                <div className="mt-8">
                  <Button variant="default">Request Details</Button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
};
export default NewProjectGallery;