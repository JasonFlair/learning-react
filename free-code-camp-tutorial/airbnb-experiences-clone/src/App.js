import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cards = data.map((card) => {
        return <Card 
            img={card.coverImg}
            rating={card.rating}
            reviewCount={card.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
        />
    });
    
    return (
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}