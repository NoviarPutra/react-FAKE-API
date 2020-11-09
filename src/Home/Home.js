import React, { Component, Fragment } from "react";
import BlogPost from "../BlogPost/BlogPost";
import About from "../About/About";
import HomeComponent from "./HomeComponent";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/BlogPost">Blog Post</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/About">About</Link>
                </li>
              </ul>
            </Nav>
          </Navbar>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/BlogPost">
            <BlogPost />
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
