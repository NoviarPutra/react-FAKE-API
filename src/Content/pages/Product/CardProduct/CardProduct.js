import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../Redux/Reducer/globalActionType";

class CardProduct extends Component {
  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="" alt="thumbnail-product" />
        </div>
        <p className="product-title">Ayam Crispy</p>
        <p className="prodyct-price">Rp. 20.000</p>
        <div className="counter">
          <button className="minus" onClick={this.props.handleMinus}>
            -
          </button>
          <input type="text" value={this.props.order} />
          <button className="plus" onClick={this.props.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.ADD }),
    handleMinus: () => dispatch({ type: ActionType.MINUS }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
