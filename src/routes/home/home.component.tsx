import React from 'react';

import AtemMaestroVideoHero from '../../components/atem-maestro-video-hero.component';
import AtemMaestroAwesomations from '../../components/atem-maestro-awesomations.component';
import FWImageSection from '../../components/fw-image-section.component';


  const Home: React.FC = () => {
  
    return (
      <div>
        <AtemMaestroVideoHero />
        <AtemMaestroAwesomations />
        <FWImageSection />
      </div>
    );
  };
  
  export default Home;