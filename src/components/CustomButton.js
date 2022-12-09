import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles'; // hook to allow CSS injection inside customButton 

// used Button component from Material-UI, then used withStyles hook to create styling for the Button component.
const StyledButton = styled(Button)({
    root: {
      display: "flex",
      alignItems: "center" ,
      justifyContent: "center",
      height: "44px",
      padding: "0 25px",
      boxSizing: "border-box",
      borderRadius: 0,
      background: "#4f25f7",
      color: "#fff",
      transform: "none",
      boxShadow: "6px 6px 0 0 #c7d8ed",
      transition: "background .3s, border-color .3s, color .3s",
      "&:hover" : {backgroundColor:"#4f25f7"},
    },
    label: {textTransform: 'capitalize'},
  });

function CustomButton(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomButton
