import { useState } from "react";
import "./App.css";
import { Navimg, Hamburger, Cross } from "./components/Icons";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <section className="min-h-screen bg-[#0B100B]">
      <Navbar />
      <Header />
      <About />
    </section>
  );
}

export default App;
