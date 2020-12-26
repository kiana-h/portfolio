import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import ScrollHandler from "./components/helper/scroll-handler";
import Menu from "./components/menu/menu";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import CodeProjects from "./components/projects/code_projects";
import DesignProjects from "./components/projects/design_projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollHandler />
        <Menu />
      </header>
      <Landing />
      {/* <About section="#about" /> */}
      <CodeProjects />
      <DesignProjects section="#design" />
      <Contact section="#contact" />
    </div>
  );
}

export default App;
