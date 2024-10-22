
import React from "react";
import Hero from "./Hero/hero";
import About from "./About/page";
import Contact from "./Contact/page";
import Products from "./Products/page";
import Footer from "./Footer/footer"




export default function Home() {
  return (
    <div >  
      
      <Hero/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
  
    
     </div>
  );
}
