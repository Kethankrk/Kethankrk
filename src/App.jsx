import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-5">
        <HeroSection />
        <About />
        <h3 className="pt-16 text-4xl font-semibold text-center xl:text-start">My Services</h3>
        <div className="flex gap-5 justify-center pt-10 flex-wrap">
          <Services
            name="Web Development"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, corrupti."
            imageLink="code.png"
          />
          <Services
            name="Android Development"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, corrupti."
            imageLink="android.svg"
          />
          <Services
            name="Automation"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, corrupti."
            imageLink="automation.png"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
