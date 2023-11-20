import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./Components/Pages/Home";
import Index from "./Components/Pages/Index";
import Show from "./Components/Pages/Show";
import Edit from "./Components/Pages/Edit";
import New from "./Components/Pages/New"
import FourOFour from "./Components/Pages/FourOFour";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Index />} />
        <Route path="/plants/:index" element={<Show />} />
        <Route path="/plants/:index/edit" element={<Edit />} />
        <Route path="/plants/new" element={<New />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}

export default App;
