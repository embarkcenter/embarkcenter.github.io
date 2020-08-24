import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import UncontrolledLottie from '../components/UncontrolledLottie';
import '../assets/css/styles.css';

const PageHeader = props => {
  return (
    <section class="hero-wrap">
      <div class="overlay"></div>
      <div class="container-fluid px-0" style={{height: '100%'}}>
      	<div class="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
	      	<div class="one-third js-fullheight align-self-end order-md-last img-fluid">
            <UncontrolledLottie animationData="teamwork_lottie" width={'90vh'} height={'90vh'} loop={true} autoplay={true} />
          </div>
	        <div class="one-forth d-flex align-items-center js-fullheight">
	        	<div class="text mt-5">
              <img alt="logo" src={require('../assets/images/embark_logo.png')} style={{minWidth: '85%', maxWidth: '90%'}} />
		  				<p className={css(styles.subHeading)}>Assisting small businesses and aspiring entrepreneurs with accelerated innovation and development.</p>
	          </div>
	        </div>
	    	</div>
      </div>
    </section>
  )
};

const styles = StyleSheet.create({
  subHeading: {
    fontFamily: 'Raleway, sans-seriff',
    fontWeight: 'lighter',
    fontSize: 20,
  }
})

export default PageHeader;