import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import MainScreen from './components/MainScreen';
import { makeStyles } from '@mui/styles';
import WhyWe from './components/WhyWe';
import Screen3 from './components/Screen3';
import Trainings from './components/Trainings';
import Conference from './components/Conference';
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
      <WhyWe />
      <Screen3 />
      <Trainings />
      <Conference />
      <Screen6 />


    </Box>
  );
}

export default App;
