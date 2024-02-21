import AboutUs from "./AboutUs";
import Awards from './Awards';
import ContactUs from "./ContactUs";
import Header from "./Header";
import Hero from "./Hero";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Awards/>
      <ContactUs />
    </div>
  );
};

export default MainPage;
