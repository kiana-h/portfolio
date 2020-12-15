import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/menu";
import Landing from "./components/landing/landing";
import ProjectIndex from "./components/projects/project_index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Landing />
      <ProjectIndex />
    </div>
  );
}

export default App;
