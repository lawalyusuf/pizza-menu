import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


// Pizza Array Object
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },

  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// App Component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
}

// Menu Component
function Menu() {
  return (
    <main className="menu">
      <h1>OUR MENU</h1>
      <p>
        <h4>
          Authenticate Italian Cuisine. 6 creating dishes to choose from. All
          from our stone oven, all organic, all delicious.
        </h4>
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          // <Pizza
          //   name={pizza.name}
          //   ingredients={pizza.ingredients}
          //   price={pizza.price}
          //   photoName={pizza.photoName}
          //   soldOut={pizza.soldOut}
          // />
          <Pizza pizzaObject={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* 
        <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          photoName="pizzas/focaccia.jpg"
          soldOut="false"
        />

        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          price={10}
          photoName="pizzas/margherita.jpg"
          soldOut="false"
        />

        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={12}
          photoName="pizzas/spinaci.jpg"
          soldOut="false"
        /> */}
    </main>
  );
}

// Pizza Component (Child comp. to Menu)
function Pizza({pizzaObject}) {

  // if (pizzaObject.soldOut) return null;

  return (
    // <li className="pizza">
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      {/* <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p>{props.price}</p>
        <p>{props.soldOut}</p> */}

      <img src={pizzaObject.photoName} alt={pizzaObject.name} />

      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price }</span>
      </div>

    </li>
  );
}


// Footer Component
function Footer() {
  const hours = new Date().getHours();
  const openHours = 10;
  const closeHour = 22;
  const isOpen = hours >= openHours && hours <= closeHour;

  console.log(isOpen);


  if (!isOpen) return (<p>
    We are happy to welcome you between {openHours}:00 and {closeHour}:00.{" "}
  </p>);

  return (
    <footer className="footer">
      {/* We're open untill {new Date().toLocaleTimeString()}. Come visit us or
      order online. */}

      {isOpen ? (
        <Order closeHour={closeHour} openHours={openHours} />
        // <div className="order">
        //   <p>
        //     We're open untill {closeHour}:00. Come visit us or order online.
        //   </p>
        //   <button className="btn">Order</button>
        // </div>
      ) : (
        <p>
          We are happy to welcome you between {openHours}:00 and {closeHour}:00.{" "}
        </p>
      )}
    </footer>
  );
}

// Order Component (child comp. to Footer)
function Order({closeHour, openHours}) {
  
  return (<div className="order">
          <p>
            We're open from {openHours}:00 untill {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
  </div>);

}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
