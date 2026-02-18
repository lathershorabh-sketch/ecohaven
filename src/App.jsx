import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import About from "./components/About";
import Betterfuture from "./components/Betterfuture";
import Greenerfuture from "./components/Greenerfuture";
import Customers from "./components/Customers";
import SwiperContainer from "./components/SwiperContainer";
import JoinJourney from "./components/JoinJourney";

function App() {
  return (
    <section className="min-h-screen bg-[#0B100B]">
      <Navbar />
      <Header />
      <About />
      <Betterfuture />
      <Greenerfuture />
      <Customers />
      <SwiperContainer />
      <JoinJourney />
    </section>
  );
}

export default App;
