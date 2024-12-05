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
        <Route
          path="*"
          element={
            <div className="w-screen h-screen flex items-center justify-center">
              <span className="text-6xl ">404 Not Found</span>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
