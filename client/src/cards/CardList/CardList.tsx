import React from "react";
import { Card } from "../Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

type CardListProps = {
    cards: Card[];
    cardDeleted: (index: number) => void;
};

const CardList: React.FC<CardListProps> = ({ cards, cardDeleted }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th style={{ width: "1px" }}>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            { cards.map((card, index) => (
                <tr key={index}>
                    <td><Link to={`${index}`}>{ card.name }</Link></td>
                    <td>{ card.email }</td>
                    <td>
                        <Button variant="danger" onClick={() => cardDeleted(index)}>Delete</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default CardList;