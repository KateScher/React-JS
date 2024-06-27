import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/greeting";
import Counter from "./components/counter";

function App() {
  const name = "Екатерина!";
  return (
    <div className="App">
      <h1>Изучаем React!</h1>
      <Greeting name={name} />
      <Counter />
    </div>
  );
}

export default App;
