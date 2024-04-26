import React from 'react'
import "./Trip.css"
import TripData from './TripData';
import Trip1 from './Images/Trip1.jpg';
import Trip2 from './Images/Trip2.jpg';
import Trip3 from './Images/Trip3.jpg';


function Trip() {
    return ( <>
     <div className='trip'>
        <h1>Recent Trip</h1>
        <p>You Can discover Unique Destination Using Google Maps.</p>
        <div className='tripcard'>

             <TripData 
            image ={Trip1}
            heading = "Trip in Indonesia"
            text = "Indonesia officially The republic Of Indonesia is a Country In Southeast Asia and Ocenala between The india and pacific oceans it concicit of ever 17000 islands including sumetra,java,silawesi . "
             />
             
             <TripData 
            image ={Trip2}
            heading = "Trip in malaysia"
            text = "malaysia is a Southeast Asian Country Occupying part of the Malay peninsula and island of Borneo it known For its beacheas Rainforests and Mix of malay Chinese indian and europian culture influences. "
             />

             <TripData 
            image ={Trip3}
            heading = "Trip in France"
            text = "France is The officially the French Republic, and  is a country located primarily in Western Europe. and  It also includes overseas regions and territories in the Americas and the Atlantic, Pacific, and Indian oceans. "
             />

        </div>
     </div>

    </> );
}

export default Trip;