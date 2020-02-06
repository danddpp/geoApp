import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './Themes';


import Routes from './routes';

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Routes/>
    </MuiThemeProvider>
  );
}

export default App;
