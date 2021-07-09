import React, { useState } from 'react';
import styled from 'styled-components';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { countries } from './countries';
import { block } from 'strip-comments';

const RegistrationForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [participation, setParticipation] = useState('');
  const [agreeUpdates, setAgreeUpdates] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <FormContainer >
        <FormTitle>Register</FormTitle>
        <FormText>
          Register for the conference to get updates on the programme and speakers. Please fill in all the fields.
        </FormText>
        <Form autoComplete="off" >
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
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            color="primary"
            required
            style={TextFieldStyle}
            className={classes.root}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
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
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
          <TextField
            id="position"
            label="Position"
            variant="outlined"
            type="text"
            color="primary"
            required
            style={TextFieldStyle}
            className={classes.root}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextField
            id="country-selector"
            select
            label="Country"
            color="primary"
            required
            style={SelectorStyle}
            variant="outlined"
            className={classes.root}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <FormControl
            component="fieldset"
            style={RadioStyle}
            className={classes.root}
            required
          >
            <FormLabel component="legend">Type of participation</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="participation"
              value={participation}
              onChange={(e) => setParticipation(e.target.value)}
            >
              <FormControlLabel
                value="speaker"
                control={<Radio />}
                label="Speaker"
                color="primary"
              />
              <FormControlLabel
                value="moderator"
                control={<Radio />}
                label="Moderator"
                color="primary"
              />
              <FormControlLabel
                value="participant"
                control={<Radio />}
                label="Participant"
                color="primary" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreeUpdates}
                onChange={() => setAgreeUpdates(!agreeUpdates)}
                name="checkedB"
                color="primary"
              />
            }
            label="I agree to receive updates"
            style={CheckBoxStyle}
            className={classes.root}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                name="checkedA"
                color="primary"
              />
            }
            label="I agree to terms and conditions"
            style={CheckBoxStyle}
            className={classes.root}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            style={ButtonStyle}
          >
            Register
          </Button>
        </Form>
      </FormContainer>
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
const FormContainer = styled.section`
  min-height: 100vh;
  padding: 10px;
`
const Form = styled.form`
 margin-top: 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
`
const FormTitle = styled.h2`
  color: #435C75;
`
const FormText = styled.p`
  color: #1d2935;
`;

const TextFieldStyle = {
  marginTop: "10px",
  width: "90%"
};

const SelectorStyle = {
  marginTop: "10px",
  width: "90%"
};
const RadioStyle = {
  marginTop: "10px",
  width: "85%",
  textAlign: "left",
  border: "1px solid #6f8eae",
  padding: "8px",
  borderRadius: '5px',
};

const CheckBoxStyle = {
  marginTop: "10px",
  width: "90%",
  padding: "0 0 0 5px",
};
const ButtonStyle = {
  width: "90%",
};

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6f8eae"
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
      color: "#253341"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#33475b"
    }
  }
});