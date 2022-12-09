import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/400.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomButton from './components/CustomButton';


const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomButton txt="My Button"/>
         {/* <CustomButton/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
