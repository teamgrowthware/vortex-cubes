import Home from "./components/Home/Home";
import RecentWorks from "./components/Home/RecentWorks";
import Process from "./components/Home/Process";


import Faq from "./components/Home/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonial from "./components/Home/Testimonial";
import SoftwareSolution from "./components/Home/SoftwareSolution";




export default function Page() {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <div id="home">
          <Home />
        </div>
         <Process />

      

        <div className="p-8">
          <RecentWorks />
          <SoftwareSolution />              
          <Testimonial />
          <Faq />
          
         

        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
