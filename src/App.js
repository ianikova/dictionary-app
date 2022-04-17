import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultWord="wanderlust" />
        </main>
        <footer className="App-footer">
          <a href="" target="_blank" rel="noreferrer">
            Open-source code
          </a>{" "}
          by Anna Ianikova
        </footer>
      </div>
    </div>
  );
}
