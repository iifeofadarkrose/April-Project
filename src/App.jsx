import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import ContactUs from "./components/ContactUs";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <OurWork/>
      <Awards/>
      <ContactUs/>
    </div>
  )
}