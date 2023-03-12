import { createTheme } from '@mui/material';

import { cyan, pink } from '@mui/material/colors';

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: cyan['A200'],
    },
    secondary: {
      main: pink['A400'],
    },
  },
});
