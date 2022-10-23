import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MainContext from "../context/MainContext";

export default function AllPostSlider({ createdPostLength }) {
  console.log(createdPostLength);
  const { setSliderValue } = useContext(MainContext);
  const getValueOnChange = (e, value) => {
    setSliderValue(value);
  };

  return (
    <Box width={300}>
      <Slider
        max={createdPostLength}
        size="small"
        defaultValue={1}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChangeCommitted={getValueOnChange}
      />
    </Box>
  );
}
