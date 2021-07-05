import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

import HeroImage from './HeroImage';
import RegistrationForm from './RegistrationForm';

const Home = () => {

  return (
      <PageContainer>
        <HeroImage />
        <RegistrationForm />
      </PageContainer>
    
  )

}
export default Home

const PageContainer = styled.section`
  margin: 0;
`

