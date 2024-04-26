import React from 'react'
import "./destination.css"
import DestinationData from './DestinationData';
import Mountainimg1 from './Images/Mountain1.jpg';
import Mountainimg2 from './Images/Mountain2.jpg';
import Mountainimg3 from './Images/Mountain3.jpg';
import Mountainimg4 from './Images/Mountain4.jpg';



function Destination() {
    return (  <>
 <div className='destination'>

     <h1>Populor Destinations</h1>
     <p>Tour Give You The Opertunity To See a lot Within a Time Fram</p>
     <DestinationData
        className = "first-des"
       img1 ={Mountainimg1}
       img2 = {Mountainimg2}
      heading = "Taal Volcano Btangas"
      text="Taal Volcano, located in the province of Batangas in the Philippines, is a captivating complex volcano known for its active crater and picturesque crater lake. The main feature is Taal Lake, which occupies the caldera formed by previous eruptions. Within the lake lies Volcano Island, a smaller volcanic island containing the active crater. Despite its activity, Taal Volcano attracts tourists who seek its natural beauty and unique geological features. Local guides lead treks to the crater rim, allowing visitors to experience the rugged terrain and breathtaking views of the surrounding landscape. Safety precautions are in place due to its ongoing volcanic activity. !Taal Volcano"
     />
        <DestinationData
        className = "first-des-revers"
       img1 ={Mountainimg3}
       img2 = {Mountainimg4}
      heading = "Mt. Daguldul Btangas"
      text="Mt. Daguldol, located in the province of Batangas, is a coastal mountain that offers breathtaking views of nearby Batangas mountains and beaches. With an elevation of 672 meters above sea level (MASL) or 2204 feet, it stands majestically in Sitio Biga, Barangay Hugom, San Juan, Batangas. The name “Daguldol” comes from the Tagalog word meaning a feeling of apprehension and grandiosity, aptly describing the mountain’s magnificence and the rolling slopes that characterize it.

Hikers can explore three different trails on Mt. Daguldol:

Beach Trail: This trail provides scenic views of the seaside as you hike. Imagine glimpsing the captivating blue waves of Laiya beach resort while trekking!
Woodlands and Forest Trail: Pass through lush woodlands and forests, immersing yourself in nature.
Grassland Trail: At the mountain’s summit, enjoy panoramic vistas of the surrounding Batangas mountain ranges and the coastline."
     />
</div>
    </>);
}

export default Destination;