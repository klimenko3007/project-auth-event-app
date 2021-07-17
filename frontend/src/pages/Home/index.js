import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";

import HeroImage from "./HeroImage";
import RegistrationForm from "./RegistrationForm";
import ButtonsPanel from "./ButtonsPanel";
import SignInForm from "./SignInForm";

const Home = () => {
  const [tab, setTab] = useState("register");
  return (
    <PageContainer>
      <HeroImage tab={tab} setTab={setTab} />
      <ButtonsPanel tab={tab} setTab={setTab} />
      {tab === "register" && <RegistrationForm />}
      {tab === "signin" && <SignInForm />}
    </PageContainer>
  );
};
export default Home;

const PageContainer = styled.section`
  margin: 0;
`;
