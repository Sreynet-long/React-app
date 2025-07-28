import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { MuiDateRangePicker } from './components/MuiDateRangePicker';
import { MuiNavbar } from './components/MuiNavbar';
// import MuiAccordion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiMasonry from './components/MuiMasonry';
// import MuiTable from './components/MuiTable';
// import MuiAccordion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
        {/* <header className="App-header">hellp</header> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiMasonry /> */}
        {/* <MuiTable /> */}
        {/* <MuiDateRangePicker /> */}
        <MuiNavbar />
    </ThemeProvider>
  );
}

export default App;
