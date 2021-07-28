import React from 'react';
import Link from 'gatsby';

const CallToAction = () => (
  <div>
    <Link to={'/contact'}>
      <button className="button">Nous contacter</button>
    </Link>
  </div>
);

export default CallToAction;
