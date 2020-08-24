import React from 'react';
import '../assets/css/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = props => {
  return(
    <section class="ftco-section testimony-section ftco-no-pb" id="testimonials">
    	<div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-12 text-center heading-section">
            <h2 class="mb-3">Testimonials</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
          <Carousel class="carousel-testimony" showArrows={false} showStatus={false} autoPlay infiniteLoop>     
            <TestimonialCard name="Ron Burgundy" quote={"Embark was able to create interactive websites for my Anchorman movies as well as managed the publication of my book."} company={"Channel 7 News"} />
            <TestimonialCard name="Ron Burgundy" quote={"Embark was able to create interactive websites for my Anchorman movies as well as managed the publication of my book."} company={"Channel 7 News"} />
            <TestimonialCard name="Ron Burgundy" quote={"Embark was able to create interactive websites for my Anchorman movies as well as managed the publication of my book."} company={"Channel 7 News"} />
            <TestimonialCard name="Ron Burgundy" quote={"Embark was able to create interactive websites for my Anchorman movies as well as managed the publication of my book."} company={"Channel 7 News"} />
            <TestimonialCard name="Ron Burgundy" quote={"Embark was able to create interactive websites for my Anchorman movies as well as managed the publication of my book."} company={"Channel 7 News"} />
            <TestimonialCard name="Ron Burgundy" quote={"Embark was able to create interactive websites for my Anchorman movies as well as managed the publication of my book."} company={"Channel 7 News"} />
          </Carousel>
          </div>
        </div>
      </div>
    </section>
 
  );
};

export default Testimonials;