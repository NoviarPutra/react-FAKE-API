import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";
import { connect } from "react-redux";

class Product extends Component {
  // state = {
  //   order: 1,
  // };
  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="logo" />
          </div>
          <div className="troley">
            <img src="" alt="" />
            <div className="count">{this.props.order}</div>
          </div>
        </div>
        <CardProduct/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    order : state.totalOrder
  }
}

export default connect(mapStateToProps)(Product)