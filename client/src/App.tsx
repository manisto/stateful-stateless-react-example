import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsRoutes from './cards/CardsRoutes';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/cards/*" element={<CardsRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
