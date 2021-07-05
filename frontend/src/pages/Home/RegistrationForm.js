import React from 'react';
import styled from 'styled-components';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { countries } from './countries'
import { block } from 'strip-comments';

const RegistrationForm = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <FormTitle>Register</FormTitle>
      <Form autoComplete="off" id="form">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          color="primary"
          required
          style={TextFieldStyle}
          className={classes.root}
        />
        <TextField
          id="surname"
          label="Surname"
          variant="outlined"
          type="text"
          color="primary"
          required
          style={TextFieldStyle}
          className={classes.root}
        />
        <TextField
          id="organisation"
          label="Organisation"
          variant="outlined"
          type="text"
          color="primary"
          required
          style={TextFieldStyle}
          className={classes.root}
        />
        <TextField
          id="country-selector"
          select
          label="Country"
          // value={currency}
          // onChange={handleChange}
          color="primary"
          required
          style={SelectorStyle}
          variant="outlined"
          className={classes.root}
          // helperText="Please select your currency"
        >
          {countries.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          color="primary"
          required
          style={TextFieldStyle}
          className={classes.root}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          color="primary"
          required
          style={TextFieldStyle}
          className={classes.root}
        />
      </Form>
    </ThemeProvider>
  );
}

export default RegistrationForm;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#455F7A',
    },
    secondary: {
      main: '#5f7a71',
      contrastText: '#ffcc00',
    },
    error: {
      main: '#AA0E30',
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 14
  },
});

const Form = styled.form`
 padding: 5px;
 margin-top: 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
`
const FormTitle = styled.h2`
  padding: 5px;
`
const TextFieldStyle = {
  marginTop: "10px",
  width: "90%"
}

const SelectorStyle = {
  marginTop: "10px",
  width: "90%"
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6f8eae"
    },
    "& .MuiFormLabel-root": {
      color: "#455F7A",
    },
    "& .MuiInputBase-input": {
      color: "#253341"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#33475b"
    }
  }
});