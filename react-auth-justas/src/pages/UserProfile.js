import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/styles/NavBar.styled";
import {
  ProfileContainer,
  ProfileEdit,
} from "../components/styles/ProfileContainer.styled";
import {
  ProfilePicture,
  UserInfoContainer,
} from "../components/styles/UserInfoContainer.styled";
import { post, get } from "../plugins/http";
import { Button } from "../components/styles/Button.styled";
import UserProfileEdit from "../components/UserProfileEdit";
import UserInfoBox from "../components/UserInfoBox";

import AllPostSlider from "../components/AllPostSlider";
import UserSpesificNumberPost from "../components/UserSpesificNumberPost";
import { PostContainer } from "../components/styles/UserSpesificNumberPost.styled";
import MainContext from "../context/MainContext";
const UserProfile = () => {
  let userStorageId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const navigateToAllPosts = () => {
    navigate("/allPosts");
  };
  const [photoUpdate, setPhotoUpdate] = useState([]);
  const [photoInputEmpty, setPhotoInputEmpty] = useState("");
  const [show, setShow] = useState(false);
  const [showPost, setShowPost] = useState([]);
  const { sliderValue } = useContext(MainContext);
  const [createdPostLength, setCreatedPostLength] = useState(0);

  const photo = async ({ name, surname, birthday, phone, photo, gender }) => {
    const changePhoto = await post("changePhoto", {
      name: name,
      surname: surname,
      birthday: birthday,
      phone: phone,
      gender: gender,
      photo: photo,
      id: userStorageId,
    });

    setPhotoInputEmpty(changePhoto.msg);
    getUser();
  };
  const getUser = async () => {
    const user = await get("userData/" + userStorageId);
    setPhotoUpdate(user.userData);
  };

  const getUserPostsWithSlider = async () => {
    const posts = await get(`usersPostsLimit/${sliderValue}`);
    setShowPost(posts.userPosts);
    console.log(posts.userPosts);
  };
  const getAllUserPosts = async () => {
    const getPosts = await get("getAllPosts");
    setCreatedPostLength(getPosts.posts.length);
  };

  useEffect(() => {
    getUser();
    getAllUserPosts();
  }, []);
  useEffect(() => {
    getUserPostsWithSlider();
  }, [sliderValue]);

  return (
    <ProfileContainer>
      <NavBar>
        <div>
          {photoUpdate.name}
          {photoUpdate.surname}
        </div>
      </NavBar>

      <div className="userLayout">
        <div>
          <UserInfoContainer>
            <ProfilePicture>
              <img src={photoUpdate.photo} alt="Profile picture" />
            </ProfilePicture>
          </UserInfoContainer>
        </div>
        <UserInfoBox photoUpdate={photoUpdate} />
        <div>
          <Button onClick={() => setShow((prev) => !prev)}>Edit Profile</Button>
          <Button onClick={navigateToAllPosts}>All posts</Button>
          <div>
            {show && (
              <UserProfileEdit
                photo={photo}
                photoInputEmpty={photoInputEmpty}
              />
            )}
          </div>
        </div>
      </div>
      <AllPostSlider createdPostLength={createdPostLength} />
      <PostContainer>
        {showPost.map((item, index) => (
          <UserSpesificNumberPost key={index} item={item} />
        ))}
      </PostContainer>
    </ProfileContainer>
  );
};

export default UserProfile;
