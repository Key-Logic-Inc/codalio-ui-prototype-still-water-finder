import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/results" element={<Results />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;