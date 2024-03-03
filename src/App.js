import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <TechStack/>
      <Contact/>
      <Footer/>
      
      
     

      
      <SocialLinks/>
    </div>
  );
}

export default App;
