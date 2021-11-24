import React from "react";
import { Card } from "../Card";

type CardDetailsProps = {
    card: Card
};

type CardKeys = keyof Card;

const fields: CardKeys[] = [
    "email",
    "name",
    "username",
    "website",
    "phone",
];

const CardDetails: React.FC<CardDetailsProps> = ({ card }) => (
    <form>
        {fields.map(field => (
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">{field}</label>
                <div className="col-sm-10">
                    <input readOnly type="text" className="form-control" value={card[field]} />
                </div>
            </div>
        ))}
    </form>
);

export default CardDetails;