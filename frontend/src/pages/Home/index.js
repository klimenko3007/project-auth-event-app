import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import HeroImage from './HeroImage';

const Home = () => {

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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <HeroImage />

        <Form>

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            color="primary"
            required
          />
        </Form>

      </PageContainer>
    </ThemeProvider>
  )

}
export default Home

const PageContainer = styled.section`
  margin: 0;
`

const Form = styled.form`

`