import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = props => {
  return(
    <section class="ftco-section" style={{backgroundColor: '#F8F9FA', paddingBottom: 50}} id="contact">
    	<div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-12 text-center heading-section">
            <h2 class="mb-3">Contact Us</h2>
          </div>
        </div>
        <div class="row" style={{textAlign: 'center'}}>
          <div class="col-md-6">
            <b>Email / Phone</b>
            <p style={{marginBottom: 0}}>hi@embarkcenter.com</p>
            <p>(123) 456-7890</p>
          </div>
          <div class="col-md-6">
            <b>Address</b>
            <a href="https://www.google.com/maps/place/715+Ryan+St,+Lake+Charles,+LA+70601" target="_blank" rel="noopener noreferrer">
              <p style={{marginBottom: 0}}>715 Ryan Street,</p>
              <p>Lake Charles, LA 70605</p>
            </a>
          </div>
        </div>
        <ContactForm />
        <div style={{textAlign: 'center', marginTop: 70}}>
          <p>© Embark Center 2020. Created by Pramod Gobburi. All rights reserved.</p>
        </div>
      </div>
    </section>
 
  );
};

export default Contact;