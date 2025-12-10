import Home from "./components/Home/Home";
import ExpertiseSection from "./components/Home/ExpertiseSection";
import AlllProjects from "./components/Home/AlllProjects";
import RecentWorks from "./components/Home/RecentWorks";
import Process from "./components/Home/Process";
// import Services from "./components/Home/Services";

import Faq from "./components/Home/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonial from "./components/Home/Testimonial";
import SoftwareSolution from "./components/Home/SoftwareSolution";
import Associate from './components/Home/Associate'

// import Contact from "./components/Home/Contact";

export default function Page() {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        {/* Home Section */}
        <div id="home">
          <Home />
        </div>

        {/* <div id="about">
          <About Us/>
        </div> */}

        {/* Portfolio Section */}
        {/* <div id="portfolio">
          <AlllProjects />
        </div> */}

        <div id="about">
          <ExpertiseSection />
        </div>

        <div className="p-8">
          {/* <ExpertiseSection /> */}
          <RecentWorks />
          <Process />

       
            

          <Testimonial />
          <Faq />
          <SoftwareSolution />
          <Associate/>

        </div>
      </div>
      {/* <div id="contact">
            <Contact/>
          </div> */}
      {/* Contact Section */}
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
