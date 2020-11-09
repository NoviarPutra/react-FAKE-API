import React, { Component, Fragment } from "react";
import { Jumbotron, Button } from "react-bootstrap";

export class HomeComponent extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className="text-center">
          <h1>Welcome</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default HomeComponent;
