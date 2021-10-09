// see SignupForm.js for comments
// TODO: Test the app response if not check activity 26, day 3, pages, signup 
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { useMutation } from '@apollo/react-hooks';
// TODO: import hooks and functions 
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
// const ref = React.createRef();


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  async function handleFormSubmit(event) {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
      Auth.loginUser(data.login.token);
    } catch (err) {
      console.error(error);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control type="password" placeholder="Your password" name="password" onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button disabled={!(userFormData.email && userFormData.password)} type='submit' variant='success'>

          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;