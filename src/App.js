import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <h2>About</h2>
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
        <Skills />
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
