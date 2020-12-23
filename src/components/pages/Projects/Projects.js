import React from 'react';
import '../../../App.css';

import AboutComponent from '../../AboutComponent';
import { homeObjOne } from './ProjectsData';
import { homeObjTwo } from './ProjectsData';
import { homeObjThree } from './ProjectsData';
import Footer from '../../Footer';

export default function Projects() {
  return( 
    <>
  <h1 className='services'>SERVICES</h1>
  <AboutComponent {...homeObjOne}/>
  <AboutComponent {...homeObjTwo}/>
  <AboutComponent {...homeObjThree}/>
  <Footer />
  </>
  );
}