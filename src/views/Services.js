import React from 'react';
import '../assets/css/styles.css';
import ServiceCard from '../components/ServiceCard';

const Services = props => {
  return (
    <section class="ftco-section ftco-no-pt section-bg-whitish" id="services">
    	<div class="container">
    		<div class="row justify-content-center py-5 mt-5">
          <div class="col-md-5 heading-section text-center">
            <h2 class="mb-4">Our Services</h2>
          </div>
        </div>
    		<div class="row">
					<ServiceCard lottieURI="consulting" heading="Consulting" subHeading="Our team can offer consulting services in any facet of your business." />
					<ServiceCard lottieURI="design" heading="Product Design" subHeading="Bring your ideas to life with the help our experienced UI / UX designers." />
					<ServiceCard lottieURI="software_development" heading="Software Development" subHeading="Develop your projects into products with our skilled engineering team." />
				</div>
				<div class="row">
					<ServiceCard lottieURI="marketing2" heading="Marketing" subHeading="Reach your target audiences with the help of our marketing experts." />
					<ServiceCard lottieURI="human_resources" heading="Human Resources" subHeading="Manage your workforce intelligently and efficiently with our HR managers." />
					<ServiceCard lottieURI="accounting" heading="Accounting" subHeading="Control your business finances with the help of our accounting specialists. " />
				</div>
    	</div>
    </section>
  )
};

export default Services;