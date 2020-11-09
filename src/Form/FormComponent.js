import React from "react";
import { Form, Button } from "react-bootstrap";

const FormComponent = (props) => {
  return (
    <Form className="mt-3">
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          value={props.data.title}
          onChange={props.handleFormChange}
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="body"
          placeholder="Description"
          rows={3}
          value={props.data.body}
          onChange={props.handleFormChange}
          autoComplete="off"
        />
      </Form.Group>
      <Button variant="primary" className="mr-3" onClick={props.handleSubmit}>
        Submit
      </Button>
      <Button variant="danger" onClick={props.handleClear}>
        Clear
      </Button>
    </Form>
  );
};

export default FormComponent;
