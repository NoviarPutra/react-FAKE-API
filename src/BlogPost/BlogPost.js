import React, { Component } from "react";
import { Row, Container, Form, Button } from "react-bootstrap";
import Post from "../Post/Post";
import axios from "axios";

export class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userID: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        // handle success
        this.setState({
          post: result.data,
        });
        // console.log(result.data);
      })
      .catch((error) => {
        // handle error
        console.log("ERROR GOBLOK!!!", error);
      });
  };

  handleFormChange = (e) => {
    // console.log(e.target.name);
    // console.log(this.state.formBlogPost);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    formBlogPostNew["id"] = timeStamp;
    formBlogPostNew[e.target.name] = e.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (result) => {
        // console.log(result);
        this.getPostAPI();
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  handleSubmit = () => {
    this.postDataToAPI();
  };

  handleRemove = (data) => {
    // console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      // console.log(result);
      this.getPostAPI();
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Container>
        <Form className="mt-3">
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleFormChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="body"
              placeholder="Description"
              rows={3}
              onChange={this.handleFormChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        <Row>
          {/* Looping  */}
          {this.state.post.map((post) => {
            // console.log(post);
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                desc={post.body}
                // data={post}
                remove={this.handleRemove}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BlogPost;
