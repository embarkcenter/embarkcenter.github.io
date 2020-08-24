import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/carousel.css';
import {VscQuote} from 'react-icons/vsc';

const TestimonialCard = ({ name, company, quote }) => {
  return (
    <div class="testimony-wrap py-4">
      <div class="icon d-flex align-items-center justify-content-center"><VscQuote /></div>
      <div class="text">
        <p class="mb-4">{quote}</p>
        <div class="d-flex justify-content-end mb-5" style={{textAlign: 'right'}}>
        {/* <div class="user-img" style={{backgroundImage: "url(https://i.imgur.com/b08hxPY.png)"}}></div> */}
          <div class="pl-3">
            <p class="name">{name}</p>
            <span class="position">{company}</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default TestimonialCard;