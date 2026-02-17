
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import About from "./components/About";
import Betterfuture from "./components/Betterfuture";

function App() {
  return (
    <section className="min-h-screen bg-[#0B100B]">
      <Navbar />
      <Header />
      <About />
      <Betterfuture/>
    </section>
  );
}

export default App;
