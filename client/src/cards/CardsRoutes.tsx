import React from "react";
import { Routes, Route } from "react-router-dom";
import CardDetailsPage from "./CardDetails/CardDetailsPage";
import CardListPage from "./CardList/CardListPage";

const CardsRoutes: React.FC = () => (
    <Routes>
        <Route path="/:id" element={<CardDetailsPage />} />
        <Route path="/" element={<CardListPage />} />
    </Routes>
);

export default CardsRoutes;