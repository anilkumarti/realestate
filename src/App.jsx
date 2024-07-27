import Header from "./compoments/Header/Header";
import Hero from "./compoments/Hero/Hero";
import './App.css'
import Companies from "./compoments/companies/Companies";
import Residencies from "./compoments/Residencies/Residencies";
import Value from "./compoments/Value/Value";
import Contact from "./compoments/contact/Contact";
import GetStarted from "./compoments/GetStarted/GetStarted";
import Footer from "./compoments/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
