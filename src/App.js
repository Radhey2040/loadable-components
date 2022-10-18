import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Loadable from "react-loadable";

function App() {
  //using Loadable for loading a commponent only when it is called
  const Home = Loadable({
    //import is used to call the specific comp
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
