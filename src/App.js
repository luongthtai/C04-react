import "./App.css";
import React, { Component } from "react";
import C04 from "./Components/C04";
import products from "./Data/Data.js";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: products
    }
    
    this.xoa = (id) => {
       const newProduct = this.state.data.filter((value) => {
        return value.id !== id
       })

       this.setState({
        data: newProduct
       })
    }
  }
  render() {
    return (
      <div>
        {this.state.data.map((item, index, array) => (
          <C04 name={item.name} price={item.price} title={item.desc} img={item.image} id= {item.id} click={this.xoa} />
        ))}
      </div>
    );
  }
}

export default App;
