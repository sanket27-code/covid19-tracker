import React from 'react';
import Precaution from './Precaution';
import pre1 from '../Images/symptoms1.jpg'
import './Precautions.css';

function Precautions() {
    return (
        <>
            <div className="precautions_container">
                <h3>Symptoms of Corona Virus...</h3>
                 <Precaution count={pre1}/>
                 {/* <Precaution count={pre1}/>
                 <Precaution count={pre1}/>
                 <Precaution count={pre1}/> */}
            </div>
        </>
    )
}

export default Precautions;
