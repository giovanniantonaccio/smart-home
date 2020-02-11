import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import LoggedOut from './layouts/LoggedOut';
import Login from './pages/Login';

import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <LoggedOut>
            <Login />
          </LoggedOut>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
