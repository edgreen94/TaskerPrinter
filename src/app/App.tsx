import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Help from "./pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}