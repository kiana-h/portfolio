import "./App.css";
import Menu from "./components/menu/menu";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import CodeProjects from "./components/projects/code_projects";
import DesignProjects from "./components/projects/design_projects";
import { Typography } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="code" element={<CodeProjects />} />
        <Route path="design" element={<DesignProjects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
