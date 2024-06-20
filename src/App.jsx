import AboutMe from "./components/aboutme/index.jsx";
import NameComponent from "./components/name/index.jsx";
import Project from "./components/projectList/index.jsx";
import SmallProject from "./components/smallProject/index.jsx";

function App() {
  return (
    <div className="w-full h-auto flex flex-col font-mono ">
      <NameComponent />
      <AboutMe />
      <Project />
      <SmallProject />
    </div>
  );
}

export default App;
