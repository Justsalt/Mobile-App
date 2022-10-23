import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostBox from "../components/CreatePostBox";
import {
  AllPostContainer,
  InteractiveButtons,
  SinglePostsBox,
} from "../components/styles/AllPosts.styles";
import { Button } from "../components/styles/Button.styled";
import UsersPosts from "../components/UsersPosts";
import MainContext from "../context/MainContext";
import { get, post } from "../plugins/http";

const AllPosts = () => {
  const [createPostMsg, setCreatePostMsg] = useState("");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);

  const backToPofile = () => {
    navigate("/showPhoto");
  };
  const getAllUserPosts = async () => {
    const getPosts = await get("getAllPosts");
    setPosts(getPosts.posts);
  };

  const createPost = async ({ username, title, photo }) => {
    const postData = {
      username: username,
      title: title,
      photo: photo,
    };
    const data = await post("createPost", postData);
    setCreatePostMsg(data.msg);
    getAllUserPosts();
  };

  useEffect(() => {
    getAllUserPosts();
  }, []);

  return (
    <AllPostContainer>
      <div>
        <SinglePostsBox>
          {posts.map((x, i) => (
            <UsersPosts key={i} userPostsData={x} />
          ))}
        </SinglePostsBox>
        <InteractiveButtons>
          <Button onClick={() => setShow((prev) => !prev)}>create Post</Button>
          <Button onClick={backToPofile}>Back To Profile</Button>
          <div>{show && <CreatePostBox createPost={createPost} />}</div>

          <div>{createPostMsg}</div>
        </InteractiveButtons>
      </div>
    </AllPostContainer>
  );
};

export default AllPosts;
