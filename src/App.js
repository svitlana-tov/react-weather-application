import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          {" "}
          <Weather defaultCity="New York" />
        </h1>

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/svitlana-tov"
            target="_blank"
            rel="noreferrer"
          >
            Svitlana Tovkaniuk
          </a>{" "}
          and is{" "}
          <a href="https://github.com/svitlana-tov/react-weather-application-final">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
