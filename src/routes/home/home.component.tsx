import React from 'react';

import AtemMaestroVideoHero from '../../components/atem-maestro-video-hero.component';
import AtemMaestroAwesomations from '../../components/atem-maestro-awesomations.component';
import FWImageSection from '../../components/fw-image-section.component';
import AtemProjects from '../../components/atem-projects.components';


  const Home: React.FC = () => {
  
    return (
      <div>
        <AtemMaestroVideoHero />
        <AtemMaestroAwesomations />
        <FWImageSection />
        <AtemProjects />
      </div>
    );
  };
  
  export default Home;