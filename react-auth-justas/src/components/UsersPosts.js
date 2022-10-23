import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPostContainer } from "./styles/AllPosts.styles";
import { Button } from "./styles/Button.styled";

const UsersPosts = ({ userPostsData }) => {
  const navigate = useNavigate();
  const navigateToAllPosts = () => {
    navigate("/singlePost/" + userPostsData._id);
  };

  return (
    <UserPostContainer>
      <div>Username: {userPostsData.username}</div>
      <div>Title: {userPostsData.title}</div>
      <div>
        <img src={userPostsData.photo} alt="Nuotrauka" />{" "}
      </div>
      <Button onClick={navigateToAllPosts}>Read</Button>
    </UserPostContainer>
  );
};

export default UsersPosts;
