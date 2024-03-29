import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const handleSubmit = (e) => {
  e.preventDefault();
  alert("form");
};

const handleChange = (e) => {};

function Register() {
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>metaChat</h1>
          </div>
          <input
            tpye="text"
            placeholder="username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            tpye="email"
            placeholder="email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            tpye="password"
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            tpye="password"
            placeholder="confirm password"
            name="confirm password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            already registered ? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  widht: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1 srem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weigt: bold;
      }
    }
  }
`;

export default Register;
