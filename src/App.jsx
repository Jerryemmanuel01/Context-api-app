import { BrowserRouter, Outlet, Route } from "react-router-dom";
import Header from "./components/Header";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <Header />
      <div>
        <Outlet />
      </div>
    </Context>
  );
}

export default App;
