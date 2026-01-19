import { insertBadge } from "./badge";
import "./style.css";

insertBadge();

// Your script here
class Card {
    cardId;
    name;
    collector;
    set;
    imageLink;
    imageAltText;
    description;

    constructor(cardId, name, collector, set, imageLink, imageAltText, description) {
        this.cardId = cardId;
        this.name = name;
        this.collector = collector;
        this.set = set;
        this.imageLink = imageLink;
        this.imageAltText = imageAltText;
        this.description = description;
    }
}

const cards = [
    new Card(
        "1778cf9a-2703-41e9-86d7-ec21af8cf61d",
        "Ainok Bond-Kin",
        5,
        "2x2",
        "https://data.cardsandhobbies.com/images/1778cf9a-2703-41e9-86d7-ec21af8cf61d/card.jpg",
        "Ainok Bond-Kin Card image",
        "Outlast [1][W] ([1][W], [Tap]: Put a +1/+1 counter on this creature. (Outlast only as a sorcery.) Each creature you control with a +1/+1 counter on it has first strike."
    ),
    new Card(
        "d4282ddd-3e5b-4d4c-b1b7-a48401a3521f",
        "Wrenn and Six",
        553,
        "2x2",
        "https://data.cardsandhobbies.com/images/d4282ddd-3e5b-4d4c-b1b7-a48401a3521f/card.jpg",
        "Wrenn and Six Card Image",
        "+1: Return up to one target land card from your graveyard to your hand. \n−1: Wrenn and Six deals 1 damage to any target. \n−7: You get an emblem with 'Instant and sorcery cards in your graveyard have retrace.' (You may cast instant and sorcery cards from your graveyard by discarding a land card in addition to paying their other costs.)"
    ),
    new Card(
        "1825a719-1b2a-4af9-9cd2-7cb497cd0317",
        "Force of Negation",
        50,
        "2x2",
        "https://data.cardsandhobbies.com/images/1825a719-1b2a-4af9-9cd2-7cb497cd0317/card.jpg",
        "Force of Negation Card Image",
        "If it's not your turn, you may exile a blue card from your hand rather than pay this spell's mana cost. Counter target noncreature spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard."
    ),
    new Card(
        "3c429c40-2389-41e5-8681-4bb274e25eba",
        "Mana Drain",
        57,
        "2x2",
        "https://data.cardsandhobbies.com/images/3c429c40-2389-41e5-8681-4bb274e25eba/card.jpg",
        "Card Image",
        "Counter target spell. At the beginning of your next main phase, add an amount of [C] equal to that spell's mana value."
    ),
    new Card(
        "9e2e3efb-75cb-430f-b9f4-cb58f3aeb91b",
        "Dockside Extortionist",
        107,
        "2x2",
        "https://data.cardsandhobbies.com/images/9e2e3efb-75cb-430f-b9f4-cb58f3aeb91b/card.jpg",
        "Card Image",
        "When Dockside Extortionist enters the battlefield, create X Treasure tokens, where X is the number of artifacts and enchantments your opponents control. (Treasure tokens are artifacts with '[Tap], Sacrifice this artifact: Add one mana of any color.')"
    ),
    new Card(
        "c1a31d52-a407-4ded-bfca-cc812f11afa0",
        "Mana Vault",
        308,
        "2x2",
        "https://data.cardsandhobbies.com/images/c1a31d52-a407-4ded-bfca-cc812f11afa0/card.jpg",
        "Mana Vault Card Image",
        "Mana Vault doesn't untap during your untap step. At the beginning of your upkeep, you may pay [4]. If you do, untap Mana Vault. At the beginning of your draw step, if Mana Vault is tapped, it deals 1 damage to you. [Tap]: Add [C][C][C]."
    ),
];

function sortCards(order) {
    cards.sort((a, b) => {
        if (order === "ascending") {
            return a.collector - b.collector;
        }
        if (order === "descending") {
            return b.collector - a.collector;
        }
    });
}

function renderCards() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";

    for (const card of cards) {
        // the heck there's a diff between 'of' and 'in'
        const container = document.createElement("div");

        const img = document.createElement("img");
        img.src = card.imageLink;
        img.alt = card.imageAltText;
        container.appendChild(img);

        const setInfo = document.createElement("h5");
        setInfo.textContent = `${card.set}|${card.collector}`;
        container.appendChild(setInfo);

        const description = document.createElement("p");
        description.textContent = `${card.description}`;
        container.appendChild(description);

        mainContent.appendChild(container);
    }
}

renderCards();

const dropdownList = document.querySelector("#sort-by");
dropdownList.addEventListener("change", (e) => {
    sortCards(e.target.value);
    renderCards();
});
