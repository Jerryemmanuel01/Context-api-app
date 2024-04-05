import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter className="">
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
