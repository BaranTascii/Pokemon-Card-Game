import { BrowserRouter, Routes, Route } from "react-router-dom";

import PackOpening from "./pages/PackOpening";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<PackOpening />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
