import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AdminUser() {
  return (
    <div style={{ display: 'block',  
                  padding: 0 }}>
      <Form>
      <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="First Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
      </Form>
    </div>
  );
}