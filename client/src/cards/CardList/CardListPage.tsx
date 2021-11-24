import React, { useState, useEffect, FC } from "react";
import { Card } from "../Card";
import CardList from "./CardList";

type CardListPageProps = {};

const CardListPage: FC<CardListPageProps> = () => {
    const [cards, setCards] = useState<Card[]>([]);

    async function loadCards() {
        const response = await fetch("http://localhost:3001");
        const responseCards = await response.json();
        setCards(responseCards);
    }

    async function deleteCard(index: number) {
        debugger;
        await fetch(`http://localhost:3001/${index}`, {
            method: "DELETE"
        });
        await loadCards();
    }

    useEffect(() => {
        loadCards();
    }, []);

    return (
        <CardList cards={cards} cardDeleted={deleteCard} />
    )
};

export default CardListPage;
