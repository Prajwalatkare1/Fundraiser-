import Header  from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import Compaines from "./components/Compaines/Companies"
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value"
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="App">
   <div>
   <div className="white-gradient"/>

   <Header/>
   <Hero/>
  
   
   
   </div>
   <div>
    <Compaines/>
   
   </div>
   <div>
   <Residencies/>
   </div>
   
   <div>
   
   </div>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
   </div>

   
   
  );
};

export default App;
 