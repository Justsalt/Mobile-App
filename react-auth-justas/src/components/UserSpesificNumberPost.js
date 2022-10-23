import React from "react";
import { PostBox } from "./styles/UserSpesificNumberPost.styled";

const UserSpesificNumberPost = ({ item }) => {
  return (
    <PostBox>
      <div>{item.username}</div>
      <div>
        <img src={item.photo} alt="" />
      </div>
      <div>{item.title}</div>
    </PostBox>
  );
};

export default UserSpesificNumberPost;
