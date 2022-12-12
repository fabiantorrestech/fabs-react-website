import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomButton from './CustomButton'
import { styled } from '@mui/material/styles';

// StackOverflow on Styled() in MUIv45: https://stackoverflow.com/questions/74738970/how-to-style-toolbar-with-mui-v5-with-styled-instead-of-makestyles-with-this

// 👇 This component based on Toolbar
const MyToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: '1.15rem',
  backgroundColor: '#fff',
  color: 'rgba(0, 0, 0, 0.87)',
  position: 'sticky',
  [theme.breakpoints.down('md')]: { flexDirection: 'column' } // for reformatting on screen-resizing in MUI
}));

// 👇 This component based on Typography
const MyItem = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  flexGrow: 1,
  '&:hover': { color: '#4f25c8' },
  [theme.breakpoints.down('md')]: { paddingBottom: '1rem' }
}));

export default function App() {
  return (
    <MyToolbar>
      {/* insert logo here for my website! */}
      <MyItem variant="h5">About Me</MyItem>
      <MyItem variant="h5">Projects</MyItem>
      <MyItem variant="h5">Resume</MyItem>
      <MyItem variant="h5">Contact Me</MyItem>
      <CustomButton txt='test-button'>Custom Btn</CustomButton>
    </MyToolbar>
  );
}
