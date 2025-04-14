import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Tourisme from "./components/tourisme/Tourisme";
import Cathedrale from "./pages/cathedrale/Cathedrale";
import Musee from "./pages/musee/Musee";
import PlanEau from "./pages/plan-eau/PlanEau";
import Maladrerie from "./pages/maladrerie/Maladrerie";
import Actualites from "./components/actualités/Actualites";
import Footer from "./components/footer/Footer";
import Sorties from "./components/sorties/Sorties";

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tourisme" element={<Tourisme />} />
            <Route path="/musee" element={<Musee />} />
            <Route path="/cathedrale" element={<Cathedrale />} />
            <Route path="/plan-eau" element={<PlanEau />} />
            <Route path="/maladrerie" element={<Maladrerie />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/sorties" element={<Sorties />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
