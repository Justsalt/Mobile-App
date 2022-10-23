import "./App.css";
import MainContext from "./context/MainContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import { useState } from "react";
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import GlobalStyles from "./Global-Styles";
function App() {
  const [userProfileData, setUserProfileData] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <MainContext.Provider
        value={{
          userProfileData,
          setUserProfileData,

          sliderValue,
          setSliderValue,
        }}
      >
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/showPhoto" element={<UserProfile />} />
            <Route path="/allPosts" element={<AllPosts />} />
            <Route path="/singlePost/:id" element={<SinglePost />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </ThemeProvider>
  );
}

export default App;
