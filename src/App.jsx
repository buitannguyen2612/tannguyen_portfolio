import { useRef } from "react";
import AboutMe from "./components/aboutme/index.jsx";
import NameComponent from "./components/name/index.jsx";
import Project from "./components/projectList/index.jsx";
import SmallProject from "./components/smallProject/index.jsx";

function App() {
  const moveToBox = useRef(null);
  const activeMoving = () => {
    moveToBox.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full h-auto flex flex-col font-serif">
      <NameComponent activeMoving={activeMoving} />
      <AboutMe ref={moveToBox} />
      <Project />
      <SmallProject />
    </div>
  );
}

export default App;
