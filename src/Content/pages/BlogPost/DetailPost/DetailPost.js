// Libraries
import React, { Component } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };
  componentDidMount() {
    const id = this.props.match.params.PostID;
    Axios.get(`http://localhost:3004/posts/${id}`).then((result) => {
      // console.log("result : ", result);
      let post = result.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }
  render() {
    return (
      <Container>
        <h2>{this.state.post.title}</h2>
        <h4>{this.state.post.body}</h4>
      </Container>
    );
  }
}

export default withRouter(DetailPost);
