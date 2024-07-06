import React from 'react';
import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import {mywork_data} from '../../assets/mywork';
export default function Mywork() {
  return (
    <div className='mywork' id="work">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
   
        </div>

        <div className="mywork-container">
          {
            mywork_data.map((work,i) => {
               return <img src = {work.w_img} key={i}/>
            })
          }
        </div>
      
    </div>
  )
}
