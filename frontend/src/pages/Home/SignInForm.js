import React, { useState } from "react";
import styled from "styled-components";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FormTitle>Sign in</FormTitle>
        <FormText>Enter your email and password</FormText>
        <Form>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            color="primary"
            required
            style={TextFieldStyle}
            className={classes.root}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            style={ButtonStyle}
          >
            Sign in
          </Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default SignInForm;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#455F7A",
    },
    secondary: {
      main: "#5f7a71",
      contrastText: "#ffcc00",
    },
    error: {
      main: "#AA0E30",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
    fontSize: 14,
  },
});

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6f8eae",
    },
    "& .MuiTypography-root": {
      color: "#455F7A",
    },
    "& .MuiTypography-body1": {
      color: "#455F7A",
    },
    "& .MuiFormLabel-root": {
      color: "#455F7A",
    },
    "& .MuiInputBase-input": {
      color: "#253341",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#33475b",
    },
  },
});

const TextFieldStyle = {
  marginTop: "10px",
  width: "90%",
};

const ButtonStyle = {
  width: "90%",
  marginTop: "10px",
};

const Container = styled.div`
  min-height: 100vh;
  padding: 10px;
`;
const Form = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTitle = styled.h2`
  color: #435c75;
`;
const FormText = styled.p`
  color: #1d2935;
`;
