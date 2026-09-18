import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Narrator from "@/components/Narrator";
import ConceptsStrip from "@/components/ConceptsStrip";
import AboutSection from "@/components/AboutSection";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BgVideo from "@/components/BgVideo";
import Hug from "@/components/Hug";

export default function BizHome() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Narrator />
        <ConceptsStrip />
        <AboutSection />
        <Approach />
        <Hug />
      </main>

      <div className="relative overflow-hidden">
        <BgVideo src="/footer-1.mp4" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
