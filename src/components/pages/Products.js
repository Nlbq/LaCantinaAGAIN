import React from 'react';
import '../../App.css';
import Navbar2 from '../Navbar2';
import Cards from '../Cards';
import HomeSlider1 from '../HomeSlider';
import { SliderData } from '../data/SliderData';
import PresSection from '../PresSection';
import { PresData } from '../data/PresData';


export default function Products() {
  return (
    <>
    {/* <Navbar2 /> */}
    <HomeSlider1  slides={SliderData}/>
    <PresSection {...PresData}/>
    <Cards />
    </>
  );
}
