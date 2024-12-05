import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./components/LandingPage/LandingPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
