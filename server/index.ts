import express, { Request, Response, NextFunction } from "express";
import faker from "faker";
import cors from "cors";

const cards: Faker.Card[] = [];

for (let i = 0; i < 50; i++) {
    cards.push(faker.helpers.createCard());
}

const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => {
    console.log(`started listening at port ${port}`);
});

app.get("/", allCards);
app.get("/:id", oneCard);

function allCards(request: Request, response: Response, next: NextFunction) {
    return response.status(200).json(cards);
}

function oneCard(request: Request, response: Response, next: NextFunction) {
    const id: number = parseInt(request.params["id"]);
    return response.status(200).json(cards[id]);
}