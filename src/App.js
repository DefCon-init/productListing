import React from "react";
import "./App.css";
import { ListGroup } from "react-bootstrap";
import Cart from './Cart'
const data = [
  {
    name: "Pen drive (4GB)",
    price: 500
  },
  {
    name: "CD Case",
    price: 275
  },
  {
    name: "Mouse",
    price: 300
  },
  {
    name: "Keyboard",
    price: 350
  }
];
let cart = []
let totalItems = 0
let grandTotal = 0
function App() {
  const addItem = item => {
    if (!!cart && cart.length > 0) {
      cart = cart.map(cartItem => {
        if (cartItem.name === item.name) {
          cartItem.quantity += 1
          cartItem.price = item.price + cartItem.price
        } else {
          const cartItem = { ...item, quantity: 1 }
          totalItems = cartItem.quantity
          grandTotal = cartItem.price
          cart.push(cartItem)
        }
        return cart
      })
    } else {
      const cartItem = { ...item, quantity: 1 }
      totalItems = cartItem.quantity
      grandTotal = cartItem.price
      cart.push(cartItem)
    }
  };
  const updateCart = item => {
    console.log(item);
  };
  return (
    <div className='App'>
        {data.map((item, index) => {
          return (
            <ListGroup horizontal key={index}>
              <ListGroup.Item>{item.name}</ListGroup.Item>
              <ListGroup.Item>{item.price}</ListGroup.Item>
              <ListGroup.Item as='button' onClick={() => addItem(item)}>Add</ListGroup.Item>
            </ListGroup>
          );
        })}
        {
          !!cart && !!cart.length && <Cart cart={cart} updateCart={(item) => updateCart(item)} totalItems={totalItems} grandTotal={grandTotal}/>
        }
    </div>
  );
}

export default App;
