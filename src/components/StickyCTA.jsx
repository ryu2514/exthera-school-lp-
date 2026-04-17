import React from 'react';

const StickyCTA = () => (
  <div className="sticky-cta">
    <div className="container sticky-cta__inner">
      <span className="sticky-cta__label">Exthera-School</span>
      <a href="#" onClick={(e) => { e.preventDefault(); window.open('https://exthera-school.com/seminar-special/', '_blank'); }} className="btn btn-primary">7日間無料体験</a>
    </div>
  </div>
);

export default StickyCTA;

