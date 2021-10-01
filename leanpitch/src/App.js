import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import MainScreen from './components/MainScreen';
import { makeStyles } from '@mui/styles';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 from './components/Screen6';

const useStyles = makeStyles({
  App: {
    backgroundColor: 'black'
  }
});
function App() {
  const classes = useStyles();
  return (

    <Box className={classes.App}>
      <Navbar />
      <MainScreen />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />


    </Box>
  );
}

export default App;
