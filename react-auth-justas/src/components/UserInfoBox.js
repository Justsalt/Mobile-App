import React from "react";
import { UserInfoBoxContainer } from "./styles/UserInfoBox.styled";

const UserInfoBox = ({ photoUpdate }) => {
  return (
    <UserInfoBoxContainer>
      <div>{photoUpdate.name}</div>
      <div>{photoUpdate.surname}</div>
      <div>{photoUpdate.birthday}</div>
      <div>{photoUpdate.email}</div>
      <div>{photoUpdate.phone}</div>
      <div>{photoUpdate.gender}</div>
    </UserInfoBoxContainer>
  );
};

export default UserInfoBox;
