import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styles/Button.styled";
import { Container } from "../components/styles/Container.styled";
import { Input } from "../components/styles/Input.styled";
import { ContainerRegister } from "../components/styles/registerContainer.styled";

import { post, get } from "../plugins/http";

const Login = () => {
  const navigate = useNavigate();

  const userProfile = (sendOrNot) => {
    if (!sendOrNot) {
      return navigate("/showPhoto");
    }
  };
  const emailRef = useRef();
  const passRef = useRef();

  const login = async () => {
    const user = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    const res = await post("login", user);
    userProfile(res.error);
    localStorage.setItem("userId", res.userData._id);
  };

  return (
    <Container>
      <ContainerRegister>
        <label htmlFor="">Email</label>
        <Input ref={emailRef} type="text" placeholder="email" />
        <label htmlFor="">Password</label>
        <Input ref={passRef} type="text" placeholder="password" />
        <Button onClick={login}>Login</Button>
        <Button onClick={() => navigate("/")}>Register</Button>
      </ContainerRegister>
    </Container>
  );
};

export default Login;
