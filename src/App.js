import "./App.css";
import Dictionary from "./Dictionary";
import magpie from "./magpie.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={magpie} className="logo ps-5" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="footer">coded by Stephanie Brady</footer>
    </div>
  );
}

export default App;
