import './App.css'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Banner from "../src/components/Banner";
import About from "../src/components/About";
import Products from "../src/components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Products />
      <Footer />
    </div>
  )
}

export default App
