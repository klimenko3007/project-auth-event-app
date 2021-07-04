import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Home = () => {

  const theme = createMuiTheme({

  });

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>

        <Form>

          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            type="email" 
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
  padding: 10px;
`

const Form = styled.form`

`