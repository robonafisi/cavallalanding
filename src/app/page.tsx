import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";
import Demo from "./components/demo";
import VideoSection from "./components/video-section";
import DeploymentProcess from "./components/deployment-process";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Demo />
      <VideoSection />
      <DeploymentProcess />
      <AboutUs />
      <Footer />
  

    </>
  );
}
