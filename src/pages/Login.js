import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logo from '../assets/Logo2.png';

export default function Login() {
  return (
    <Box
      id="login"
      display="flex"
      flex={1}
      flexDirection="column"
      alignItems="center"
      padding={6}
    >
      <Box id="login-logo" marginBottom={8}>
        <img alt="logo" src={logo} />
      </Box>
      <Typography variant="h1" style={{ fontSize: '30px' }}>
        Sign in
      </Typography>
      <Box
        component="form"
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
        width="100%"
        marginY={8}
      >
        <TextField id="email" label="Email" variant="filled" />
        <TextField
          id="passoword"
          label="Password"
          variant="filled"
          password
          style={{ marginTop: '24px' }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '24px' }}
        >
          SIGN IN
        </Button>
      </Box>
      <Box
        id="links"
        display="flex"
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography>Forgot your password?</Typography>
        <Box id="signup-link" display="flex">
          <Typography>Dont have and account?</Typography>
          <Typography color="textSecondary" style={{ marginLeft: '8px' }}>
            Sign up
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
