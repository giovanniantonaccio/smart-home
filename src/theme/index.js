import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: { main: '#1F8EFA' },
    background: {
      default: '#20293C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#1F8EFA',
      desabled: '#70889E',
    },
  },
  typography: {
    htmlFontSize: 10, // It is necessary to create index.css and apply it apply directly in index.html
    h1: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 100,
      fontSize: '17px',
      lineHeight: 'auto',
      letterSpacing: '0px',
    },
    h2: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 900,
      fontSize: '17px',
      lineHeight: 'auto',
      letterSpacing: '0px',
    },
    body1: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: 'auto',
      letterSpacing: '0px',
    },
    body2: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: 'auto',
      letterSpacing: '0px',
    },
  },
});
