import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Narrator from "@/components/Narrator";
import AboutSection from "@/components/AboutSection";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BgVideo from "@/components/BgVideo";
import Hug from "@/components/Hug";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Narrator />
        <AboutSection />
        <Approach />
        <Hug />
      </main>

      {/* dark outro — Contact + Footer share one video background */}
      <div className="relative overflow-hidden">
        <BgVideo src="/footer-5.mp4" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
