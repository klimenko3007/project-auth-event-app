import React from "react";
import styled from "styled-components";

const ButtonsPanel = ({ tab, setTab }) => {
  return (
    <ButtonsContainer id="form-container">
      <TabButtonRegister tab={tab} onClick={() => setTab("register")}>
        Register
      </TabButtonRegister>
      <TabButtonSignIn tab={tab} onClick={() => setTab("signin")}>
        Sign in
      </TabButtonSignIn>
    </ButtonsContainer>
  );
};

export default ButtonsPanel;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 2px 2px 8px #83a0a07a;
  margin-bottom: 20px;
  flex-grow: 1;
`;
const TabButton = styled.button`
  border: none;
  background: none;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  color: #4c5f6b;
  font-weight: bolder;
  text-align: left;

  &:hover {
    background-color: #83a0a0;
    color: #fff;
  }
`;
const TabButtonRegister = styled(TabButton)`
  border-bottom: ${(props) => props.tab === "register" && "2px solid #4C5F6B"};
  color: ${(props) => props.tab === "register" && "#2a363c"};
`;
const TabButtonSignIn = styled(TabButton)`
  border-bottom: ${(props) => props.tab === "signin" && "2px solid #4C5F6B"};
  color: ${(props) => props.tab === "signin" && "#2a363c"};
`;
