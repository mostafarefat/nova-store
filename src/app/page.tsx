
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NovaDifference from "./components/NovaDifference";
import OurServices from "./components/OurServices";
import Reviwes from "./components/Reviwes";
import TrustSingals from "./components/TrustSingals";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <TrustSingals/>
      <AboutUs/>
      <FeaturedProducts/>
      <NovaDifference/>
      <OurServices/>
      <Reviwes/>
      <Blog/>
      <CTA/>
      <Footer/>
    </main>
  );
}
