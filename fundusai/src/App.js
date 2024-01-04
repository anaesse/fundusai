import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Volunteer from "./pages/Volunteer";


function App() {
  
  return (
    <motion.div
    initial ={{opacity:0, y:75}}
    whileInView= {{opacity:1, y:0}}
    transition={{ duration: 1, delay:0.5 }}
  
>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Volunteer />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
