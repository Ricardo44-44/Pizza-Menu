import Pizza from "./Pizza"
import { useState, useEffect }from "react";
export default function Menu () {


  const [pizzas, setPizzas ] = useState ( [
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
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
    
   ] )
    // obteniendo datos del localStorage si existen, este hook es lanzado cuando se construye el componente

   useEffect (() => {
  const data = localStorage.getItem("pizzas");
  if (data) setPizzas(JSON.parse(data));
   }, [])
   // fijar los daros o actualizar
   useEffect(() => localStorage.setItem("pizzas", JSON.stringify(pizzas)), [pizzas]);

   const deletePizza = (pizzaName) => setPizzas ( prev => prev.filter((pizza) => pizza.name !== pizzaName))

  return (
  <main className="menu">
  <h2>Our menu</h2>
  {pizzas.length > 0 ? 
    //esta   <> </>  se conoce como fragment, y no se renderiza en la aplicacion, nos sirve commo contenedor padre pero sin ser renderizado
(<>
<p>Authentic Italian cousine. 6 creatives dishes to choose from. All from our stone oven, all organic all delicious.</p>

<ul className="pizzas">
{pizzas.map((pizza) => {
 
  return (
    <Pizza pizzaObject = {pizza} key= {pizza.name} onDelete= {deletePizza}/>
  )
})}
</ul>

</>) : (

<p>We're still working on our menu, Please come back later.</p>

)  }
  
  </main>
); 
}