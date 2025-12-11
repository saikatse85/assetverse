import AboutUs from "./AboutUs/AboutUs.jsx";
import Banner from "./Banner/Banner";
import FeaturesShowcase from "./FeaturesShowcase/FeaturesShowcase.jsx";
import HowItWorks from "./HowItWorks/HowItWorks.jsx";
import PackagesSection from "./PackageSection/PackageSection.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PackagesSection></PackagesSection>
      <FeaturesShowcase></FeaturesShowcase>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
