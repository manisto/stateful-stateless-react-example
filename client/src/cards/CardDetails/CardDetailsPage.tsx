import React, { useState, useEffect } from "react";
import CardDetails from "./CardDetails";
import { useParams } from "react-router-dom";
import { Card } from "../Card";

type CardDetailsPageProps = {};

const CardDetailsPage: React.FC<CardDetailsPageProps> = () => {
    const [card, setCard] = useState<Card | null>(null);
    const params = useParams();
    const id: number = parseInt(params["id"]!);
    
    useEffect(() => {
        async function loadCard() {
            const response = await fetch(`http://localhost:3001/${id}`);
            const body = await response.json();
            setCard(body);
        }

        loadCard();
    }, [id]);

    return (card) ? <CardDetails card={card} /> : <div>Loading, please wait</div>;
};

export default CardDetailsPage;