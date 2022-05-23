import "./App.css";
import Menu from "./components/menu/menu";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import CodeProjects from "./components/projects/code_projects";
import DesignProjects from "./components/projects/design_projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="code" element={<CodeProjects />} />
        <Route path="design" element={<DesignProjects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
