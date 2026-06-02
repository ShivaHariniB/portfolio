import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />
        <Skills />
        <Experience />
        {/* <section id="projects">
          <h2>Projects</h2>
        </section> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
