import React from "react";
import { Card } from "../Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Form>
        {fields.map(field => (
            <Form.Group as={Row} className={"mb-3"} key={field}>
                <Form.Label htmlFor={field} column sm={2}>{ field }</Form.Label>
                <Col sm={10}>
                    <Form.Control name={field} id={field} readOnly type="text" value={card[field]} />
                </Col>
            </Form.Group>
        ))}
    </Form>
);

export default CardDetails;
