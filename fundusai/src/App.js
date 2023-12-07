import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { motion } from "framer-motion";


function App() {
  
  return (
    <motion.div
    initial ={{opacity:0, y:75}}
    whileInView= {{opacity:1, y:0}}
    transition={{ duration: 1, delay:0.5 }}
  
>
      <Navbar />
      {/* <NavBar/> */}
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
