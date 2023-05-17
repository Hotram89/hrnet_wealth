import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./route/Router";
import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
