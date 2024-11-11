import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { pizzaData } from './data';


function Header() {
    return <h1 style={{ color: "orange", fontSize: "48px", }}>Kian Rong's Pizza Co.</h1>
}

function Menu () {
    const numOfPizzas = pizzaData.length;
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {numOfPizzas > 0 && (
                <>
                <em>Authentic Italian Cuisine</em>
                <ul className="pizzas">
                {
                    pizzaData.map((pizza) => (
                        <Pizza key={pizzaData.name} {...pizza} />
                    ))
                }
                </ul>
                </>
            )}
        </div>
    );
}

function Order() {
    return (
        <div>
        <p>We're currently open</p>
        <button>Order</button>
        </div>
    )
}

function Pizza({photoName, name, ingredients, price}) {
    return (
        <li className="pizza">
            <img src={photoName} alt={photoName} />
            <h3>{name}</h3>
            <em>{ingredients}</em>
            <p>{price}</p>
        </li>
    )
}

function App() {
    return (
        <div className="menu">
            <Header />
            <Footer />
            <Menu />
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour > 9 && hour < 23 ? true : false;
    return (
        <footer className="footer">
            { isOpen ? <Order /> : "Sorry we're closed" } 
        </footer>
    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);