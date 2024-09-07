import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import Donations from "./pages/donations";
import Events from "./pages/events";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/donations' element={<Donations />} />
        <Route path='/events' element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
