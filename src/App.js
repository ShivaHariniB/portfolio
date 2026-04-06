import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <section id="experience">
          <h2>Experience</h2>
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
