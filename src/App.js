import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Wheather from "./components/Wheather";

function App() {
  const [wheather, setWheather] = useState([]);

  const APIKEY = "b10cdbf1e306765ca4137cae9ec09552";

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    e.preventDefault();

  
      const apiData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
      )
        .then(res => res.json())
        .then(data => data)
        if(city && country){
        setWheather({
          data: apiData,
          city : apiData.name,
          country: apiData.sys.country,
          temperature: Math.round(apiData.main.temp - 273.15),
          description: apiData.weather[0].description,
          error: ""

        }
    );
  }else{

    setWheather({
      data: "",
      city : "",
      country:"",
      temperature: "",
      description: "",
      error: "Please enter a city and country correct "


  }
    )
}
  }

  return (
    <div className="App">
      <h1>WHEATHER HOOKS </h1>

      <Form getWheather={fetchData} />
      <Wheather 
      city={wheather.city} 
      country={wheather.country}
      temperature={wheather.temperature}
      description={wheather.description}
      error={wheather.error}

      
      />
      {console.log(wheather.data)}
    </div>
  );
}

export default App;
