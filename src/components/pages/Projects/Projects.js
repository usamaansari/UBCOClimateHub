import React from 'react';
import '../../../App.css';

import AboutComponent from '../../AboutComponent';
import { homeObjOne } from './ProjectsData';
import { homeObjTwo } from './ProjectsData';
import { homeObjThree } from './ProjectsData';
import { homeObjFour } from './ProjectsData';
import { homeObjFive } from './ProjectsData';


import Footer from '../../Footer';

export default function Projects() {
  return( 
    <>
  <h1 className='services'>PROJECTS</h1>
  <AboutComponent {...homeObjOne}/>
  <AboutComponent {...homeObjTwo}/>
  <AboutComponent {...homeObjThree}/>
  <AboutComponent {...homeObjFour}/>
  <AboutComponent {...homeObjFive}/>
  <Footer />
  </>
  );
}