import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchnages from "./Components/Exchnages";
import CoinDetails from "./Components/CoinDetails.jsx";

function App() {
  return (

   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/exchnages" element={<Exchnages />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
