import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import 'typeface-muli';
import 'typeface-roboto';

const theme = createMuiTheme({
    typography:{
        fontFamily:[
            "roboto",
            "muli"
        ].join(",")
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <div style={{fontFamily:"roboto"}}>
            <App/>
        </div>
    </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
