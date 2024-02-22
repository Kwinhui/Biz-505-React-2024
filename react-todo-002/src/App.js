import logo from "./logo.svg";
import "./css/App.css";
import TodoMain from "./comps/TodoMain";
function App() {
  // logo 라는 변수

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain />
    </div>
  );
}

export default App;
