import React from 'react';
import showcase1 from '../assets/images/showcase-1.jpg';
import showcase2 from '../assets/images/showcase-2.jpg';
import showcase3 from '../assets/images/showcase-3.jpg';

const Showcase = () => (
  <>
    <section className="showcase">
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 p-5">
            <h2 className="custom-heading">Fully Responsive Design</h2>
            <p className="lead">
              When you use a theme created by Start Bootstrap, you know <br />
              that the theme will look great on any device,  whether it's a<br />
              phone, tablet, or desktop the page will behave responsively!
            </p>
          </div>
          <div className="col-lg-6 p-0">
            <img src={showcase1} alt="Showcase 1" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>


    <section className="showcase">
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 p-0">
            <img src={showcase2} alt="Showcase 2" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-lg-6 p-5"> 
            <h2 className="custom-heading">Updated For Bootstrap 5</h2>
            <p className="lead">
              Newly improved, and full of great utility classes, Bootstrap 5 is<br />
              leading the way in mobile responsive web development! All of<br />
              the themes on Start Bootstrap are now using Bootstrap 5!              
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="showcase">
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 p-5"> 
            <h2 className="custom-heading">Easy to Use & Customize</h2>
            <p className="lead">
              Landing Page is just HTML and CSS with a splash of SCSS for<br />
              users who demand some deeper customization options. Out of <br />
              the box, just add your content and images, and your new<br />
              landing page will be ready to go!
            </p>
          </div>
          <div className="col-lg-6 p-0">
            <img src={showcase3} alt="Showcase 3" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Showcase;
