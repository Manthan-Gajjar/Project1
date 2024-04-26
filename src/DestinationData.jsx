import React from 'react'
import "./DestinationData.css"


function DestinationData(props) {
    return (<>
      <div className={props.className}>
   <div className='des-text'>
   <h2>{props.heading}</h2>
  <p>{props.text}</p>
  </div>
  
<div className='Image'>
<img alt='img'src={props.img1} />
<img alt='img'src={props.img2} />

</div>
  </div>


    </>);
}

export default DestinationData;