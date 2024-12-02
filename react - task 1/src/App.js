import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import Projects from "./components/Projects";
import Team from "./components/Team";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

import shape3 from "./assets/shape3.png";
import shape4 from "./assets/shape4.png";
import shape5 from "./assets/shape5.png";
import shape6 from "./assets/shape6.png";
import shape7 from "./assets/shape7.png";
import shape8 from "./assets/shape8.png";
import shape9 from "./assets/shape9.png";

function App() {
  return (
    <div className="overflow-x-hidden">

      <div className='h-full'>
            <Navbar />
            <Home />
      </div>

      <div>
      <div>
          {/* other images at different corners */}
          <img className="w-[366px] h-[431px] top-[1350px] left-[-52px] absolute" src={shape3} alt="shape3" />
          <img className="w-[250px] h-[431px] top-[2032px] right-0 absolute" src={shape4} alt="shape4" />
          <img className="w-[259px] h-[471px] top-[2580px] left-[-52px] absolute" src={shape5} alt="shape5" />
          
          <img className="w-[268px] h-[431px] top-[3030px] right-0 absolute" src={shape6} alt="shape6" />
          <img className="w-[366px] h-[431px] top-[3540px] left-[-10px] absolute" src={shape7} alt="shape7" />
         
          <img className="w-[268px] h-[476.12px] top-[4000px] right-0 absolute" src={shape8} alt="shape8" />
          <img className="w-[179px] h-[404px] top-[5136px] left-[-26px] absolute" src={shape9} alt="shape8" />
        </div>

        <div>
       
          <AboutUs />

        
          <Services />

         
          <Team />

        
          <Projects />

       
          <Clients />

          <Footer />
        </div>

      </div>

     
    </div>
  );
}

export default App;
