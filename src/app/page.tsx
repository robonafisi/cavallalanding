'use client';
import Navbar from './Components/navbar';
import Landing from './Components/landing';
import ValueProp from './Components/valueprop';
import Faq from './Components/faq';
import AboutUs from './Components/aboutus';
import Footer from './Components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="landing">
        <Landing />
      </section>

      <section id="valueprop">
        <ValueProp />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>

      <Footer />
    </div>
  );
}
