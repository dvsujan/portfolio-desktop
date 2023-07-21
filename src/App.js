import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
function App() {
  const Home = () => {
    if (isMobile) {
      return <>this is home mobile view</>;
    } else {
      return <>this is Home in browser</>;
    }
  };

  const Projects = () => {
if (isMobile) {
      return <>this is projects  mobile view</>;

    } else {
      return <>this is projects in browser</>;
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
