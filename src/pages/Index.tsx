import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectGallery from "@/components/ProjectGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mediterranean Estates | Luxury Property Construction & Development</title>
        <meta 
          name="description" 
          content="Premium Mediterranean property construction and development. Luxury villas, coastal homes, and renovations on the Mediterranean coast since 1998." 
        />
        <meta name="keywords" content="Mediterranean construction, luxury villas, property development, coastal homes, Spain, renovation" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <ProjectGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
