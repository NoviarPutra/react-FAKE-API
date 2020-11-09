import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Post.css";

const Post = (props) => {
  // console.log(props);
  return (
    <Col sm={4}>
      <Card style={{ width: "10rem" }} className="mt-3">
        <Card.Img variant="top" src="https://placeimg.com/200/150/tech" />
        <Card.Body>
          <Card.Title className="text-center title" style={{ height: "3rem" }}>
            {props.data.title}
            {/* {props.data.title} */}
          </Card.Title>
          <Card.Text className="text-justify desc" style={{ height: "6rem" }}>
            {props.data.body}
            {/* {props.data.body} */}
          </Card.Text>
        </Card.Body>
        <Button onClick={() => props.handleEdit(props.data)}>Edit</Button>
        <Button
          variant="danger"
          className="mt-1"
          onClick={() => props.handleRemove(props.data.id)}
          // onClick={() => props.remove(props.data.id)}
        >
          Remove
        </Button>
      </Card>
    </Col>
  );
};

export default Post;
