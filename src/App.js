import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  const randomWord = "Wanderlust";

  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <h1>Dictionary 📖</h1>
        </header>
        <main>
          <Dictionary default={randomWord} />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/ianikova/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Anna Ianikova
        </footer>
      </div>
    </div>
  );
}
