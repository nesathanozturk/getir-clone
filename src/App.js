import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <div className="container mx-auto grid gap-y-6 pt-8">
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
