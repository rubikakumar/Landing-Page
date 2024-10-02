import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const features = [
  {
    title: "Fully Responsive",
    description: "This theme will look great on any device, no matter the size!",
    icon: <i className="bi bi-window text-primary" style={{ fontSize: '5rem' }}></i>,
  },
  {
    title: "Bootstrap 5 Ready",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
    icon: <i className="bi bi-layers text-primary" style={{ fontSize: '5rem' }}></i>,
  },
  {
    title: "Easy to Use",
    description: "Ready to use with your own content, or customize the source files!",
    icon: <i className="bi bi-terminal text-primary" style={{ fontSize: '5rem' }}></i>,
  }
];

const Features = () => (
  <section id="features" className="py-5" style={{ padding: '100px 0' }}> 
    <div className="container" style={{ maxWidth: '1200px' }}> 
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-lg-4 text-center" style={{ padding: '80px 40px' }}> 
            <span className="display-1">{feature.icon}</span>
            <h3 className="mt-3">{feature.title}</h3>
            <p className="lead">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
