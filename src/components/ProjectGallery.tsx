import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorPool from "@/assets/interior-pool.jpg";
import interiorKitchen from "@/assets/interior-kitchen.jpg";
import stefonmariaExterior from "@/assets/stefonmaria-exterior.jpg";
import stefonmariaLiving from "@/assets/stefonmaria-living.jpg";
import stefonmariaEntrance from "@/assets/stefonmaria-entrance.jpg";
import stefonmariaPool from "@/assets/stefonmaria-pool.jpg";
import stefonmariaJacuzzi from "@/assets/stefonmaria-jacuzzi.jpg";
import stefonmariaBalcony from "@/assets/stefonmaria-balcony.jpg";
import stefonmariaTerrace from "@/assets/stefonmaria-terrace.jpg";
import stefonmariaDining from "@/assets/stefonmaria-dining.jpg";
import stefonmariaFront from "@/assets/stefonmaria-front.jpg";
import stefonmariaPatio from "@/assets/stefonmaria-patio.jpg";
import stefonmariaArch from "@/assets/stefonmaria-arch.jpg";
import stefonmariaSide from "@/assets/stefonmaria-side.jpg";
import stefonmariaConstruction from "@/assets/stefonmaria-construction.jpg";

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      images: [stefonmariaExterior, stefonmariaPool, stefonmariaEntrance, stefonmariaLiving, stefonmariaJacuzzi, stefonmariaBalcony, stefonmariaTerrace, stefonmariaDining, stefonmariaFront, stefonmariaPatio, stefonmariaArch, stefonmariaSide, stefonmariaConstruction],
      title: "Villa Stefonmaria",
      location: "Kissonerga, Pafos, Cyprus",
      description: "Tailored made Villa with a pool, jacuzzi, under floor heating, pool water fall, fountain and many other facilities.",
      specs: "100m² | 2 Bed | 2 Bath | Pool",
    },
    {
      images: [project2, interiorKitchen, interiorBedroom, interiorLiving],
      title: "Timi Village House Rennovation",
      location: "Nueva Andalucía, Marbella, Spain",
      description: "Traditional Andalusian villa nestled in the hills above Puerto Banús. Stone archways, mature gardens with century-old palms, and views to La Concha mountain.",
      specs: "385m² | 4 Bed | 3 Bath | Garden",
    },
    {
      images: [project3, interiorLiving, interiorKitchen, interiorBedroom],
      title: "Palazzo Sant'Angelo",
      location: "Cortona, Tuscany, Italy",
      description: "Restored 18th-century townhouse in the historic centro storico. Original terracotta floors, vaulted ceilings, and a private courtyard with a Renaissance fountain.",
      specs: "320m² | 4 Bed | 3 Bath | Courtyard",
    },
    {
      images: [project4, interiorPool, interiorBedroom, interiorLiving],
      title: "Quinta do Mar",
      location: "Carvoeiro, Algarve, Portugal",
      description: "Clifftop estate with direct access to secluded cove beach. Multiple sun terraces, outdoor kitchen, and panoramic Atlantic views from every room.",
      specs: "545m² | 6 Bed | 5 Bath | Beachfront",
    },
    {
      images: [project5, interiorLiving, interiorBedroom, interiorKitchen],
      title: "Mas des Oliviers",
      location: "Gordes, Luberon, France",
      description: "Authentic Provençal farmhouse surrounded by 3 hectares of olive groves and lavender fields. Exposed stone walls, oak beams, and a heated pool terrace.",
      specs: "420m² | 5 Bed | 4 Bath | Estate",
    },
    {
      images: [project6, interiorPool, interiorKitchen, interiorLiving],
      title: "Residencia Port Adriano",
      location: "El Toro, Mallorca, Spain",
      description: "Boutique waterfront apartments with private marina berths. Rooftop infinity pool, concierge services, and views across the Bay of Palma.",
      specs: "12 Units | Pool | Marina",
    },
    {
      images: [project7, interiorBedroom, interiorPool, interiorLiving],
      title: "Villa Blanca del Mar",
      location: "Jávea, Costa Blanca, Spain",
      description: "Classic Mediterranean estate on the Montgo hillside. Moorish-inspired architecture, landscaped tropical gardens, and a 15-meter swimming pool.",
      specs: "475m² | 5 Bed | 4 Bath | Pool",
    },
    {
      images: [project8, interiorLiving, interiorPool, interiorBedroom],
      title: "Villa Oia Sunset",
      location: "Oia, Santorini, Greece",
      description: "Iconic caldera-view property carved into the volcanic cliff. Minimalist Cycladic design, private infinity pool, and front-row seats to the famous Oia sunset.",
      specs: "340m² | 4 Bed | 3 Bath | Caldera View",
    },
    {
      images: [project9, interiorKitchen, interiorLiving, interiorBedroom],
      title: "Podere San Lorenzo",
      location: "Montalcino, Tuscany, Italy",
      description: "Elegant stone farmhouse in the heart of Brunello wine country. Barrel-vaulted dining room, alfresco terrace, and 2 hectares of private vineyards.",
      specs: "510m² | 6 Bed | 5 Bath | Vineyard",
    },
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

  const navigateProject = (direction: "prev" | "next") => {
    if (selectedProject === null) return;
    const newIndex =
      direction === "next"
        ? (selectedProject + 1) % projects.length
        : (selectedProject - 1 + projects.length) % projects.length;
    setSelectedProject(newIndex);
    setSelectedImageIndex(0);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedProject === null) return;
    const imagesCount = projects[selectedProject].images.length;
    const newIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % imagesCount
        : (selectedImageIndex - 1 + imagesCount) % imagesCount;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Completed Projects
          </h2>
          <p className="text-muted-foreground">
            Explore our collection of luxury Mediterranean properties, each one 
            a testament to our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl overflow-hidden bg-background shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-primary-foreground/90 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <p className="text-primary-foreground/80 text-sm">{project.specs}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </p>
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

            <button
              onClick={() => navigateProject("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-primary-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={() => navigateProject("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-primary-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative">
                  <img
                    src={projects[selectedProject].images[selectedImageIndex]}
                    alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`}
                    className="w-full rounded-xl shadow-2xl aspect-[4/3] object-cover"
                  />
                  
                  {/* Image Navigation Arrows */}
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

                  {/* Image Counter */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground/50 rounded-full text-primary-foreground text-sm">
                    {selectedImageIndex + 1} / {projects[selectedProject].images.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 justify-center">
                  {projects[selectedProject].images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(imgIndex);
                      }}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === imgIndex
                          ? "border-primary"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${projects[selectedProject].title} thumbnail ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
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

export default ProjectGallery;
