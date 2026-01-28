import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

export default function Landing() {
  
  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}
