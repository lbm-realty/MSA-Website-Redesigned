import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import Newsletter from "./pages/newsletter";
import Donations from "./pages/donations";
import Events from "./pages/events";
import Banner from "./components/banner";
import SocialConnect from "./components/socialConnect";
import Quote from "./components/quote";
import DirectMessage from "./components/directMessage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Banner />
        <SocialConnect />
        <Quote />
        <DirectMessage />
        <Footer />
      </Router>
    </>
  );
}

export default App;
