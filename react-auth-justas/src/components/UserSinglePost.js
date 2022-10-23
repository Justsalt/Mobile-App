import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { PostBoxContainer, SinglePosBox } from "./styles/SinglePost.styled";

const UserSinglePost = ({ userPostById }) => {
  const navigate = useNavigate();

  const navigateToAllPost = () => {
    navigate("/allPosts");
  };
  return (
    <PostBoxContainer>
      <SinglePosBox>
        <div>{userPostById.username}</div>
        <div>
          <img src={userPostById.photo} alt="" />
        </div>
        <h4>Title</h4>
        <div>{userPostById.title}</div>
      </SinglePosBox>
      <Button onClick={navigateToAllPost}>Back To All Posts</Button>
    </PostBoxContainer>
  );
};

export default UserSinglePost;
