import FontLoader from "./components/FontLoader";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import DueDiligence from "./components/DueDiligence";
import Attorneys from "./components/Attorneys";
import Knowledge from "./components/Knowledge";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import ConsultForm from "./components/ConsultForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BacktoTop";




export default function App() {
  return (
    <div className="font-sans">
      <FontLoader />
      <Topbar />
      <Navbar />
      <Hero />
      <Ticker /> 
      <TrustBar />
      <About />
      <PracticeAreas />
      <DueDiligence />
      <Attorneys />
      <Knowledge />
      <Testimonials />
      <ConsultForm />
      <Footer />
      <BackToTop/>
      <WhatsAppButton />
    </div>
  );
}