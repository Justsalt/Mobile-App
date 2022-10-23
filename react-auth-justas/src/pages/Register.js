import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styles/Button.styled";
import { Container } from "../components/styles/Container.styled";
import { Input } from "../components/styles/Input.styled";
import { Label } from "../components/styles/label.styled";
import { ContainerRegister } from "../components/styles/registerContainer.styled";
import { get, post } from "../plugins/http";
const Register = () => {
  const [userValidText, setUserValidText] = useState("");
  const [userErrorMsg, setUserErrorMsg] = useState("");
  const navigate = useNavigate();

  const registerNavigate = () => {
    navigate("/login");
  };
  let emailRef = useRef();
  let passwordRef = useRef();
  let secondPasswordRef = useRef();

  const handleClick = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    secondPasswordRef.current.value = "";
  };
  const userValidOrNot = (error) => {
    if (!error) {
      setUserValidText("User buvo sukurtas");
    }
  };
  const registerPost = async () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      secondPassword: secondPasswordRef.current.value,
    };
    const data = await post("register", user);
    handleClick();
    userValidOrNot(data.error);
    setUserErrorMsg(data.msg);
    emailRef = "";
  };
  return (
    <Container>
      <ContainerRegister>
        <Label htmlFor="">Email</Label>
        <Input ref={emailRef} type="text" />
        <Label htmlFor="">Password</Label>
        <Input ref={passwordRef} type="text" />
        <Label htmlFor="">Repeat Password</Label>
        <Input ref={secondPasswordRef} type="text" />
        <div className="msgContainer">
          <div className="userValidText">{userValidText}</div>
          <div className="userErrorMsg">{userErrorMsg}</div>
        </div>
        <Button onClick={registerPost}>Register</Button>
        <Button onClick={registerNavigate}> Log In</Button>
      </ContainerRegister>
    </Container>
  );
};

export default Register;
