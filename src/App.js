import './App.css';
import {useState} from "react";

const cardImages = [
    {"src": "/img/helmet-1.png"},
    {"src": "/img/potion-1.png"},
    {"src": "/img/ring-1.png"},
    {"src": "/img/scroll-1.png"},
    {"src": "/img/shield-1.png"},
    {"src": "/img/sword-1.png"},
]

function App() {

    const [cards, setCards] = useState([]);
    const [turns,setTurns] = useState(0);

    // Shuffles 12 cards randomly and gives each card a random id every time the on click event triggers.
    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setCards(shuffleCards)
        setTurns(0);
    }

    console.log(cards,turns);


    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <div className="card" key={card.id}>
                        <div>
                            <img src={card.src} className="front" alt="card front"/>
                            <img src="/img/cover.png" className="back" alt="card back"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
