import React from "react";
import "./App.css";
import { ListGroup } from "react-bootstrap";
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
function App() {
  const addItem = item => {
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
    </div>
  );
}

export default App;
