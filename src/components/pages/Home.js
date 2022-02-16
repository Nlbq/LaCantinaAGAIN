import React, {useState} from 'react';

import '../../App.css';
// import HomeNavbar from '../HomeNavbar';
// import Navbar2 from '../Navbar2';
// import Dropdown from '../Dropdown';
import Cards from '../Cards';
import HomeSlider1 from '../HomeSlider';
import { SliderData } from '../data/SliderData';
import PresSection from '../PresSection';
import { PresData } from '../data/PresData';


export default function Home() {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <>
    {/* <Navbar2 /> */}
    {/* <Dropdown isOpen= {isOpen} toggle={toggle}/> */}
    {/* <HomeNavbar toggle={toggle}/> */}
    <HomeSlider1  slides={SliderData}/>
    <PresSection {...PresData}/>
    <Cards />
    </>
  );
}



// import React from 'react';
// // import '../../App.css';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';


// function Home() {
//   return (
//     <>
//       <HeroSection />
//       <Cards />
//     </>
//   );
// }

// export default Home;
