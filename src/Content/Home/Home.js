// Libraries
import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
// Pages
import About from "../pages/About/About";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import HomeComponent from "./HomeComponent";

export class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand className="ml-3" href="#">
              Blog Post
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/BlogPost">Blog Post</Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/About">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/BlogPost">
            <BlogPost />
          </Route>
          <Route path="/DetailPost/:id">
            <DetailPost />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
