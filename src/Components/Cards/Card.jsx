import React from 'react';
import CountUp from 'react-countup';

const Card = (props) => {
    return(
        <>
             <div className='Card_box' style={{borderBottom: `5px solid ${props.borderColor}`}}>
                 <div className="Count">
                     <h3 className='count_number' style={{color:`${props.borderColor}`}}>
                         <CountUp
                         start = {0}
                         end = {props.my_data}
                         duration = {2}
                         separator = ','
                         >
                         </CountUp>
                     </h3>
                 </div>
                 <div className="icon">
                     <p>
                         {props.icons}
                     </p>
                 </div>
                 <div className="description">
                     <p>
                         Total corona cases<span> {props.msg} </span>Globally!!
                     </p>
                 </div>
             </div>
        </>
    )
}

export default Card;