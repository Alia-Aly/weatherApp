import React, { useState } from "react";
import "./weather.css";
import "./responsive.css";
// import cloudy from "./images/2.png";
// import sleet from "./images/sleet.png";
// import light_rain from "./images/light-rain.png";
import search_icon from "./images/search.png";
import light_sunny from "./images/light-sunny.png";

const WeatherApp = () => {
  const api_Key = "be8f8c78a2c996c369b0dd9474c62fa3";
  // =========================================
  const [wind, setWind] = useState("2.95");
  const [city, setCity] = useState("");
  const [twon, setTwon] = useState("Egypt");
  const [humidity, setHumidity] = useState("89");
  const [visibility, setVisibility] = useState("9990");
  const [pressure, setPressure] = useState("950");
  const [temp, setTemp] = useState("15.8");
  // ==========================================
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_Key}`);
      const data = await response.json();
      console.log(data);
      // =============================
      setWind(data.wind.speed);
      setTwon(data.name);
      setHumidity(data.main.humidity);
        setPressure(data.main.pressure);
        setVisibility(data.visibility)
        setTemp(data.main.temp)
      // =======================
    } catch (error) {
      console.log(error);
    }
  };
  const getinputval = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <nav>
          <div className="search">
            <input type="search" name="search " onChange={getinputval} id="search" className="searchInput" placeholder="Search Location" autoComplete="off" />
            <button onClick={fetchData}>
              <img src={search_icon} alt="asd" className="search-icon" />
            </button>
          </div>
          <div className="links">
            <ul className="hidden">
              <li>
                <button href="#">maps</button>
              </li>
              <li>
                <button>weakly prediction</button>
              </li>
              <li>
                <button>monthly prediction</button>
              </li>
              <li>
                <button>Rates and averages</button>
              </li>
            </ul>
            <ul className="shown">
              <li>
                <button href="#">maps</button>
              </li>
              <li>
                <button>weakly prediction</button>
              </li>
              <li>
                <button>monthly prediction</button>
              </li>
              <li>
                <button>Rates and averages</button>
              </li>
            </ul>
          </div>
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="location">
          <div className="example">
            <h4>the current weather</h4>
            <span className="city" id="city">
              {twon}
            </span>
            <div className="temp">
              <img src={light_sunny} alt="" />
                          <div className="deg" id="temp">
                              {temp}
              </div>
            </div>
            <div className="info">
              <div className="ele">
                <button>winds</button>
                <span id="wind">{wind}</span>
              </div>
              <div className="ele">
                <button>humidity</button>
                              <span id="humidity">{humidity}</span>
              </div>
              <div className="ele">
                <button>Visibility</button>
                              <span id="Visibility">{ visibility}</span>
              </div>
              <div className="ele">
                <button>UV Indicator</button>
                <span>0</span>
              </div>
              <div className="ele">
                <button>the pressure</button>
                              <span id="pressure">{ pressure}</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="weathers">
          <div className="weather">
            <h4>sat 5</h4>
            <img src={cloudy} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
          <div className="weather">
            <h4>sun 6</h4>
            <img src={sleet} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
          <div className="weather">
            <h4>mon 7</h4>
            <img src={cloudy} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
          <div className="weather">
            <h4>tuse 8</h4>
            <img src={light_rain} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
          <div className="weather">
            <h4>wed 9</h4>
            <img src={cloudy} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
          <div className="weather">
            <h4>thur 10</h4>
            <img src={sleet} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
          <div className="weather">
            <h4>fri 11</h4>
            <img src={light_rain} alt="" />
            <span></span>
            <div className="degrees">
              <span className="big"></span>
              <span className="small"></span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherApp;
