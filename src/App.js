import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");

  function handleCity(event) {  
    setCity(event.target.value);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f321285891103fb423e8a01bc3d728e6`;
      const response = await fetch(url);
      const weather = await response.json();
      setCurrentWeather(weather);
    }
    fetchApi();
  }, [city])


  return (
    <div className="App">
      <input
        type="text"
        onChange={handleCity}
        placeholder="Search Weather"
        value={city} />
      <div> {city} </div>

      {!currentWeather.main ? (<div></div>) : (
        <div> {currentWeather.main.temp} {currentWeather.weather[0].description}</div>)}

    </div>
  );
}

export default App;