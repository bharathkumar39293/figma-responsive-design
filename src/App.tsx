import React from 'react';

import Mainpage from './assets/components/Mainpage.tsx';
import AboutUs from './assets/components/AboutUs.tsx';
import OurServices from './assets/components/OurServices.tsx';
import OurProjects from './assets/components/OurProjects.tsx';
import HowWeWork from './assets/components/HowWeWork.tsx';
import ClientsFeedback from './assets/components/ClientsFeedback.tsx';
import ContactUs from './assets/components/ContactUs.tsx';
import Footer from './assets/components/Footer.tsx';

const App = () =>  {
  return (
    <div>
    <Mainpage/>
    <AboutUs/>
    <OurServices/>
    <OurProjects/>
    <HowWeWork/>
    <ClientsFeedback/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default App;
