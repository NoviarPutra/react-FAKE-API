import React from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
  // console.log(props);
  const history = useHistory();

  const handleClickTitle = (id, title) => {
    history.push({
      pathname: `/edit/${id}`,
      state: {
        kon: title,
      },
    });
  };

  return (
    <>
      <Card>
        <Row>
          <Col>
            <Card.Img variant="top" src="https://placeimg.com/200/150/tech" />
          </Col>
          <Col>
            <Card.Title
              className="text-center title"
              style={{ height: '3rem' }}
              onClick={() => handleClickTitle(props.data.id, props.data.title)}
            >
              {props.data.title}
              {/* {props.data.title} */}
            </Card.Title>
            <Card.Text className="text-justify desc" style={{ height: '6rem' }}>
              {props.data.body}
              {/* {props.data.body} */}
            </Card.Text>
            <Row>
              <Col>
                <Button
                  className="w-100"
                  onClick={() => {
                    props.handleEdit(props.data);
                    props.handleClear(props.data.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="w-100"
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
    // <Col sm={4}>
    //   <Card className="p-4">
    //     <Row>
    //       <Col className="p-0">
    //       </Col>
    //       <Col className="p-0">
    //         <Card.Title
    //           className="text-center title"
    //           style={{ height: "3rem" }}
    //         >
    //           {props.data.title}
    //           {/* {props.data.title} */}
    //         </Card.Title>
    //         <Card.Text className="text-justify desc" style={{ height: "6rem" }}>
    //           {props.data.body}
    //           {/* {props.data.body} */}
    //         </Card.Text>
    //       </Col>
    //     </Row>
    //     <Button
    //       onClick={() => {
    //         props.handleEdit(props.data);
    //         props.handleClear(props.data.id);
    //       }}
    //     >
    //       Edit
    //     </Button>
    //     <Button
    //       variant="danger"
    //       className="mt-1"
    //       onClick={() => props.handleRemove(props.data.id)}
    //       // onClick={() => props.remove(props.data.id)}
    //     >
    //       Remove
    //     </Button>
    //   </Card>
    // </Col>
  );
};

export default Post;
