import Hero from "../components/Hero";
import WorkflowVisual from "../components/WorkflowVisual";
import AppIcon from "../components/AppIcon";
import AppScreenshots from "../components/AppScreenshots";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkflowVisual />
      <AppIcon />
      <AppScreenshots />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
