import logo from "./logo.svg";
import "./css/App.css";
import MainNav from "./layout/MainNav";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "./provider/UserProvider";
import { BookContextProvider } from "./provider/BookProvider";

function App() {
  // outlet 영역은 컨텐츠 영역 없으면 아무런 요소가 안나옴
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserContextProvider>
        <MainNav />
        <BookContextProvider>
          <Outlet />
        </BookContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
