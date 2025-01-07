import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import HowItWork from "../components/HowItWork";
import ContactUs from "../components/ContactUs";
import FinanceTestimonials from "../components/Testimonal";
import Services from "../components/Services";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handlesignupClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <HowItWork />
      <FinanceTestimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
