import React, { Component } from "react";
import "./C04.css";

class C04 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }



  render() {
    return (
      <div className="container">
        <div className="left">
          <img src={this.props.img} alt={this.props.img}  />
        </div>
        <div className="right">
          <h2>{this.props.name}</h2>
          <p className="content">{this.props.title}</p>
          <div id="mua">
            <p id="price">{this.props.price}</p>
            <div id="button">
            <button type="button">MUA NGAY</button>
            <button type="button" onClick={() => this.props.click(this.props.id)}>XOA</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default C04;
