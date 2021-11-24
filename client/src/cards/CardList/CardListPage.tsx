import React, { useState, useEffect, FC } from "react";
import { Card } from "../Card";
import CardList from "./CardList";

type CardListPageProps = {};

const CardListPage: FC<CardListPageProps> = () => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        async function loadCards() {
            const response = await fetch("http://localhost:3001");
            const responseCards = await response.json();
            setCards(responseCards);
        }

        loadCards();
    }, []);

    function cardDeleted(index: number) {
        console.log(`Would have deleted card at index ${index}`);
    }

    return (
        <CardList cards={cards} cardDeleted={cardDeleted} />
    )
};

export default CardListPage;