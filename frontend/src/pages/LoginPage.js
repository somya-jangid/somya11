import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: #141414;
  color: #E5E5E5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  background-color: #181818;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #333333;
  border-radius: 4px;
  background-color: #333333;
  color: #E5E5E5;
`;

const Button = styled.button`
  background-color: #E50914;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

function LoginPage() {
  return (
    <LoginContainer>
      <Form>
        <h2>Sign In</h2>
        <Input type="email" placeholder="Email or phone number" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">SIGN IN</Button>
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a href="#">Need help?</a>
        <p>New to Netflix? <a href="/signup">Sign up now</a>.</p>
      </Form>
    </LoginContainer>
  );
}

export default LoginPage;