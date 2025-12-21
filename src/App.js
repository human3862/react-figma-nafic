import { Routes, Route, Router } from "react-router-dom";
import { Footer } from "./componets/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AboutPage } from "./pages/AboutPage";
import { ScrollToAnchor } from "./myHuks/ScrollToAnchor";

function App() {
  return (
    <div>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
