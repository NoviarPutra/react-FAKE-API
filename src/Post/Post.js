import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const Post = (props) => {
  // console.log(props);
  return (
    <Col sm={4}>
      <Card style={{ width: "15rem" }} className="mt-3">
        <Card.Img variant="top" src="https://placeimg.com/200/150/tech" />
        <Card.Body>
          <Card.Title className="text-center" style={{ height: "6rem" }}>
            {props.title}
            {/* {props.data.title} */}
          </Card.Title>
          <Card.Text className="text-justify" style={{ height: "12rem" }}>
            {props.desc}
            {/* {props.data.body} */}
          </Card.Text>
        </Card.Body>
        <Button
          variant="danger"
          className="mt-1"
          onClick={() => props.remove(props.id)}
          // onClick={() => props.remove(props.data.id)}
        >
          Remove
        </Button>
      </Card>
    </Col>
  );
};

export default Post;
