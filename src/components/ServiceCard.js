import React from 'react';
import '../assets/css/styles.css';
import UncontrolledLottie from './UncontrolledLottie';

const ServiceCard = ({ lottieURI, heading, subHeading }) => {
  return (
    <div class="col-md-4 text-center d-flex card-hover-transform">
      <div class="services-1 bg-white-card">
        <span class="icon">
          <UncontrolledLottie animationData={lottieURI} loop={true} autoplay={true} height={200} width={200} />
        </span>
        <div class="desc">
          <h3 class="mb-4">{heading}</h3>
          <p>{subHeading}</p>
        </div>
      </div>
    </div>
  )
};

export default ServiceCard;