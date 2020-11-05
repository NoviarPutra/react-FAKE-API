import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import Post from "../Post/Post";
import axios from "axios";

export class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts")
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

  handleRemove = (data) => {
    // console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      // console.log(result);
      this.getPostAPI();
    });
  };

  componentDidMount() {
    // Fetching Default using Vanilla / ES6
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    // axios
    //   .get("http://localhost:3004/posts")
    //   .then((result) => {
    //     // handle success
    //     this.setState({
    //       post: result.data,
    //     });
    //     // console.log(result.data);
    //   })
    //   .catch((error) => {
    //     // handle error
    //     console.log("ERROR GOBLOK!!!", error);
    //   });
    this.getPostAPI();
  }

  render() {
    return (
      <Container>
        <Row>
          {/* Looping  */}
          {this.state.post.map((post) => {
            // console.log(post);
            return (
              <Post
                key={post.id}
                title={post.title}
                desc={post.body}
                // data={post}
                id={post.id}
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
