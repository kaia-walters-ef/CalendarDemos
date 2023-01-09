import logo from "./logo.svg";
import "./App.css";
import ReactCalendar from "./components/ReactCalendar.js/ReactCalendar";
import ReactBigCalendar from "./components/ReactBigCalendar/ReactBigCalendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Calendar Demos</p>
        <ReactCalendar />
        <ReactBigCalendar />
      </header>
    </div>
  );
}

export default App;
