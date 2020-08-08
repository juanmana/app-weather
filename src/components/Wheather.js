import React from 'react';


const Wheather = ({city, temperature,description,country,error}) => {
const image = <img src = "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloud.jpg" alt=""/>

function matchvalue(){
if(description){


    const weatherDescription = description.split(" ")
    const cloudyData = ['clouds','cloud','overcast','cloudy']
    
    for(var i = 0; i < weatherDescription.length; i++){

      if(cloudyData.includes(weatherDescription[i])){
           
        return image

    }

    }

}    

}



    return (  



<div>

    {city && country && <p>{city},{country}</p>}
    {temperature && <p>Temperature:{temperature}ºC</p>}
    {description && <p>Description:{description}</p>}
    {description && matchvalue()}
    {error && <p>{error}</p>}


</div>


    );
}
 
export default Wheather;