import './App.css'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Banner from "../src/components/Banner";
import About from "../src/components/About";
import Products from "../src/components/Products";
import Partners from "../src/components/Partners";
import Avaliations from "../src/components/Avaliations";
import Contact from "../src/components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Products />
      <Partners />
      <Avaliations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
