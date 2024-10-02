import React from 'react';
import Header from './Components/Header';
import Testimonial from './Components/Testimonial';
import Features from './Components/Features';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Showcase from './Components/Showcase';
import testimonials1 from './assets/images/testimonials-Margaret-1.jpg';
import testimonials2 from './assets/images/testimonials-Fred-2.jpg';
import testimonials3 from './assets/images/testimonials-Sarah-3.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Features />
      <Showcase />
      <section className="testimonials py-5 bg-light text-center">
        <h2 className="text-dark mb-5">What people are saying...</h2>
        <div className="container">
          <div className="row">
            <Testimonial 
              name="Margaret E." 
              message='"This is fantastic! Thanks so much guys!"' 
              imgSrc={testimonials1} 
            />
            <Testimonial 
              name="Fred S." 
              message={`"Bootstrap is amazing.I've been using it<br />to create lots of super nice landing<br />pages."`} 
              imgSrc={testimonials2} 
              isHTML={true}
            />
            <Testimonial 
              name="Sarah W." 
              message={`"Thanks so much for making these free<br />resources available to us!"`} 
              imgSrc={testimonials3} 
              isHTML={true}
            />
          </div>
        </div>
      </section>
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
