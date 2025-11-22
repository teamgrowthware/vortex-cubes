import Home from './components/Home/Home';
import ExpertiseSection from './components/Home/OurExpertise';
import AlllProjects from './components/Home/AlllProjects';
import RecentWorks from './components/Home/RecentWorks';
import Process from './components/Home/Process';
import Services from './components/Home/Services';
import Faq from './components/Home/Faq';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <div className='bg-black'>
        <Navbar/>
        <Home/>
        <AlllProjects/>
        <div className='p-8'>
          <ExpertiseSection/>
          <RecentWorks/>
          <Process/>
          <Services/>
          <Faq/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
