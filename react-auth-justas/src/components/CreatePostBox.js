import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../plugins/http";
import { CreatePostWrapper } from "./styles/AllPosts.styles";
import { Button } from "./styles/Button.styled";

const CreatePostBox = ({ createPost, show }) => {
  const photoRef = useRef();
  const titleRef = useRef();
  const usernameRef = useRef();

  const userCreateSinglePost = () => {
    const postData = {
      username: usernameRef.current.value,
      title: titleRef.current.value,
      photo: photoRef.current.value,
    };
    return postData;
  };
  return (
    <CreatePostWrapper>
      <div>Username</div>
      <input ref={usernameRef} type="text" />
      <div>Photo</div>
      <input ref={photoRef} type="text" />
      <div>Titile</div>
      <input ref={titleRef} type="text" />
      <Button onClick={() => createPost(userCreateSinglePost())}>
        Add Post
      </Button>
    </CreatePostWrapper>
  );
};

export default CreatePostBox;
