import style from "./styles/pizza-styles.module.css"
  function Pizza ({pizzaObject, onDelete}){
  
  console.log ("Props", pizzaObject )
  return(
    <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"] : " "}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <p>{pizzaObject.price}</p>
        <button onClick={( ) => onDelete (pizzaObject.name)}> Delete pizza 🗑️</button>
      </div>
    </li>
  )
}
export default Pizza;
