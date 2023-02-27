import WeatherSearch from "./WeatherSearch";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather Search</h1>
        <WeatherSearch />
      </div>
      <footer>
        <a
          href="https://github.com/marynmcnamara/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Maryn McNamara
      </footer>
    </div>
  );
}
