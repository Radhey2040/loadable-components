// import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import Switch from "react-switch";
// import Home from "./components/home";
// import Hello from "./components/hello";
import Loadable from "react-loadable";

function App() {
  const Home = Loadable({
    loader: () => import("./components/home"),
    loading() {
      return <div>Loading...</div>;
    },
  });

  const Hello = Loadable({
    loader: () => import("./components/hello"),
    loading() {
      return <div>Loading...</div>;
    },
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/hello">Hello</Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
