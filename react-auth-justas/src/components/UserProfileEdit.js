import React, { useRef, useState } from "react";
import { ProfileEdit } from "../components/styles/ProfileContainer.styled";
import { Button } from "../components/styles/Button.styled";
import { Input } from "../components/styles/Input.styled";

const UserProfileEdit = ({ photo, photoInputEmpty }) => {
  const [gender, setGender] = useState("");
  const nameRef = useRef();
  const surnameRef = useRef();
  const birthDateRef = useRef();
  const phoneRef = useRef();
  const photoRef = useRef();
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  function sendUserData() {
    const userData = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      birthday: birthDateRef.current.value,
      phone: phoneRef.current.value,
      photo: photoRef.current.value,
      gender: gender,
    };
    return userData;
  }

  return (
    <div>
      <ProfileEdit>
        <div>Vardas</div>
        <Input ref={nameRef}></Input>
        <div>Pavarde</div>
        <Input ref={surnameRef}></Input>
        <div>Gimimo metai</div>
        <Input ref={birthDateRef}></Input>
        <div>Telefono Numeris</div>
        <Input ref={phoneRef}></Input>
        <div>Nuotrauka</div>
        <Input ref={photoRef} placeholder="Nuotrauka Su Http Pradzia"></Input>
        <form>
          <input
            type="radio"
            value="vyras"
            id="male"
            onChange={handleChange}
            name="gender"
          />
          <label htmlFor="male">Vyras</label>

          <input
            type="radio"
            value="moteris"
            id="female"
            onChange={handleChange}
            name="gender"
          />
          <label htmlFor="female">Moteris</label>
          <input
            type="radio"
            value="nesvarbu"
            id="unknow"
            onChange={handleChange}
            name="gender"
          />
          <label htmlFor="unknow">Nesvarbu</label>
        </form>
        <Button onClick={() => photo(sendUserData())}>Save Changes</Button>
        <div>{photoInputEmpty}</div>
      </ProfileEdit>
    </div>
  );
};

export default UserProfileEdit;
