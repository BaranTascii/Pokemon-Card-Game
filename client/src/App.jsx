import { BrowserRouter, Routes, Route } from "react-router-dom";

import PackOpening from "./pages/PackOpening";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<PackOpening />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
