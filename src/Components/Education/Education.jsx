import React from 'react';
import './Education.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import {edu_details} from '../../assets/edu_details';
export default function Education() {
  return (
    <div className='education' id="educa">
            <div className="edu-title">
                <h1>Education</h1>
  
            </div>

            <div className="edu-details">
              {
                edu_details.map((edu,i) => {
                 return <div className="edu" key = {i}>
                   <h3>{edu.education}</h3>
                   <h2>{edu.institute}</h2>
                   <h4>{edu.add}</h4>
                   <h4>{edu.batch}</h4>
                 </div>
                })
               }
            </div>
      
    </div>
  )
}
