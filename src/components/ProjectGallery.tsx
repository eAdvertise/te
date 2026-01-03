import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      image: project1,
      title: "Villa Azure",
      location: "Kissonerga",
      description: "A stunning infinity pool villa with panoramic Mediterranean views, featuring 5 bedrooms and contemporary open-plan living.",
      specs: "450m² | 5 Bed | 4 Bath | Pool",
    },
    {
      image: project2,
      title: "Casa del Sol",
      location: "Marbella, Spain",
      description: "Elegant coastal home with traditional stone facade and modern interiors. Beautiful landscaped gardens with palm trees.",
      specs: "380m² | 4 Bed | 3 Bath | Garden",
    },
    {
      image: project3,
      title: "Palazzo Fiori",
      location: "Tuscany, Italy",
      description: "Historic townhouse renovation with charming courtyard fountain and traditional terracotta details throughout.",
      specs: "320m² | 4 Bed | 3 Bath | Courtyard",
    },
    {
      image: project4,
      title: "Beachfront Paradise",
      location: "Algarve, Portugal",
      description: "Contemporary beachfront estate with multiple terraces, outdoor dining areas, and direct beach access.",
      specs: "550m² | 6 Bed | 5 Bath | Beachfront",
    },
    {
      image: project5,
      title: "Olive Grove Estate",
      location: "Provence, France",
      description: "Beautifully restored farmhouse surrounded by olive groves, combining rustic charm with modern luxury.",
      specs: "420m² | 5 Bed | 4 Bath | Estate",
    },
    {
      image: project6,
      title: "Sea View Residences",
      location: "Mallorca, Spain",
      description: "Exclusive apartment complex with rooftop terraces, communal pools, and stunning coastal views.",
      specs: "12 Units | Pool | Terraces",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const navigateProject = (direction: "prev" | "next") => {
    if (selectedProject === null) return;
    const newIndex =
      direction === "next"
        ? (selectedProject + 1) % projects.length
        : (selectedProject - 1 + projects.length) % projects.length;
    setSelectedProject(newIndex);
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
                  src={project.image}
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
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateProject("prev")}
              className="absolute left-4 p-2 text-primary-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={() => navigateProject("next")}
              className="absolute right-4 p-2 text-primary-foreground hover:text-primary transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-8 items-center">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full rounded-xl shadow-2xl"
              />
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
