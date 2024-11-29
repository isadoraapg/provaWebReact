import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Transacoes from "./Pages/Transacoes";

function App() {
  return (
    <div className="App">
      <Header>Home</Header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Transacoes" element={<Transacoes />} />
      </Routes>
      <Footer>Direitos Reservados - Isadora</Footer>
    </div>
  );
}

export default App;
