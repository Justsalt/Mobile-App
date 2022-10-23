import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/styles/Container.styled";
import UserSinglePost from "../components/UserSinglePost";
import { get } from "../plugins/http";

const SinglePost = () => {
  const { id } = useParams();
  const [userPostById, setUserPostById] = useState("");

  const getUserPost = async () => {
    const userPostData = await get("userPost/" + id);
    setUserPostById(userPostData.userPost[0]);
  };
  useEffect(() => {
    getUserPost();
  }, []);
  return (
    <Container>
      <UserSinglePost userPostById={userPostById} />
    </Container>
  );
};

export default SinglePost;
