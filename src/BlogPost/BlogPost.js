import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Post from "../Post/Post";
import axios from "axios";
import FormComponent from "../Form/FormComponent";

export class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userID: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
    isClear: false,
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
        console.log("Error : ", error);
      });
  };

  handleFormChange = (e) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }
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
        this.setState({
          formBlogPost: {
            userID: 1,
            id: 1,
            title: "",
            body: "",
          },
        });
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((result) => {
        console.log(result);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            userID: 1,
            id: 1,
            title: "",
            body: "",
          },
        });
      });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleRemove = (dataId) => {
    // console.log(data);
    axios.delete(`http://localhost:3004/posts/${dataId}`).then((result) => {
      // console.log(result);
      this.getPostAPI();
    });
  };

  handleClear = () => {
    this.setState({
      formBlogPost: {
        userID: 1,
        id: 1,
        title: "",
        body: "",
      },
    });
  };

  handleEdit = (allData) => {
    this.setState({
      formBlogPost: allData,
      isUpdate: true,
    });
    console.log(allData);
  };

  handleClear = (id) => {
    console.log(id);
    this.setState({
      isClear: !this.state.isClear,
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Container>
        <FormComponent
          isUpdate={this.state.isUpdate}
          data={this.state.formBlogPost}
          handleFormChange={this.handleFormChange}
          handleRemove={this.handleRemove}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
          isClear={this.state.isClear}
        />
        <Row>
          <Col>
            {/* Looping  */}
            {this.state.post.map((post) => {
              // console.log(post);
              return (
                <Post
                  data={post}
                  key={post.id}
                  // id={post.id}
                  // title={post.title}
                  // desc={post.body}
                  handleEdit={this.handleEdit}
                  handleRemove={this.handleRemove}
                  handleClear={this.handleClear}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogPost;
