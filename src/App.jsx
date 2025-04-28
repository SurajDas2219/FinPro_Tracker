import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Found from "./pages/Found.jsx";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Found />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
