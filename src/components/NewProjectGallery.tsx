import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      images: ["/placeholder.svg"],
      title: "New Villa Project",
      location: "Pafos, Cyprus",
      description: "Coming soon - A brand new luxury villa development.",
      specs: "TBD"
    },
    {
      images: ["/placeholder.svg"],
      title: "Modern Home Development",
      location: "Limassol, Cyprus",
      description: "Coming soon - Contemporary Mediterranean home.",
      specs: "TBD"
    },
    {
      images: ["/placeholder.svg"],
      title: "Coastal Residence",
      location: "Coral Bay, Cyprus",
      description: "Coming soon - Beachfront property development.",
      specs: "TBD"
    }
  ];

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
    const newIndex = direction === "next" 
      ? (selectedImageIndex + 1) % imagesCount 
      : (selectedImageIndex - 1 + imagesCount) % imagesCount;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section id="new-projects" className="py-24 bg-background">
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
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9] lg:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
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
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={projects[selectedProject].images[selectedImageIndex]}
                    alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`}
                    className="w-full rounded-xl shadow-2xl aspect-[4/3] object-cover"
                  />
                  
                  {projects[selectedProject].images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage("prev");
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-foreground/50 rounded-full text-primary-foreground hover:bg-foreground/70 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage("next");
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-foreground/50 rounded-full text-primary-foreground hover:bg-foreground/70 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
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
          </div>
        )}
      </div>
    </section>
  );
};

export default NewProjectGallery;
