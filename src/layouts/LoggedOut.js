import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import logo from '../assets/Logo.png';
import background from '../assets/background.png';

export default function LoggedOut({ children }) {
  return (
    <Box component="main" display="flex" flexDirection="row" height="100vh">
      <Box
        id="left-side"
        display="flex"
        minWidth="65%"
        padding={7}
        flexDirection="column"
        justifyContent="space-between"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Box id="logo">
          <img alt="logo" src={logo} />
        </Box>
        <Box
          id="center-text"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h1" style={{ fontSize: '50px' }}>
            Control your home
          </Typography>
          <Typography variant="h2" style={{ fontSize: '50px' }}>
            Connect your life
          </Typography>
        </Box>
        <Box
          id="bottom-text"
          display="flex"
          alignItems="center"
          fontSize="36px"
        >
          <PlayCircleFilledIcon color="primary" fontSize="inherit" />
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ marginLeft: '21px' }}
          >
            See how it works
          </Typography>
        </Box>
      </Box>
      <Box id="right-side" display="flex" width="35%" flex={1}>
        {children}
      </Box>
    </Box>
  );
}

LoggedOut.propTypes = {
  children: PropTypes.node.isRequired,
};
