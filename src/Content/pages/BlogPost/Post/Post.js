// Libraries
import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  // console.log(props);
  const history = useHistory();
  const handleDetail = (id, title) => {
    history.push({
      pathname: `/DetailPost/${id}`,
      state: {
        title: title,
      },
    });
  };

  return (
    <>
      <Card className="w-75">
        <Row>
          <Col>
            <Card.Img variant="top" src="https://placeimg.com/200/150/tech" />
          </Col>
          <Col>
            <Card.Title
              className="text-center title"
              style={{ height: "3rem" }}
              onClick={() => handleDetail(props.data.id, props.data.title)}
            >
              {props.data.title}
            </Card.Title>
            <Card.Text className="text-justify desc">
              {props.data.body}
              {/* {props.data.body} */}
            </Card.Text>
            <Row>
              <Col className="mt-3 text-center">
                <Button
                  className="mr-4"
                  onClick={() => {
                    props.handleEdit(props.data);
                    props.handleClear(props.data.id);
                    props.showButtonClear(props.data.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="mr-4"
                  variant="danger"
                  onClick={() => props.handleRemove(props.data.id)}
                  // onClick={() => props.remove(props.data.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Post;
