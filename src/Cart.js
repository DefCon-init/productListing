import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
class Cart extends Component {
  render() {
    const { cart } = this.props
    return (
     <div>
    {
        !!cart && !!cart.length && cart.map((item, index) => {
            return (
                <ListGroup horizontal key={index}>
                <ListGroup.Item>{item.name}</ListGroup.Item>
                <ListGroup.Item>{item.price}</ListGroup.Item>
                <ListGroup.Item as='button' onClick={() => this.props.updateCart(item)}>Add</ListGroup.Item>
              </ListGroup>   
            )
          })
    }
     </div>  
    )
  }
}

export default Cart;
