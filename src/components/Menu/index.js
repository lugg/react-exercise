import React from "react";
import styled from "styled-components";
import LogoSvg from "./logo.svg";

const Division = styled.div`
  padding: 0 15px;
  width: 100%;
`;

const Content = styled.div`
  border-bottom: 1px solid rgba(59, 68, 120, 0.05);
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
`;

const Branding = styled.div`
  align-items: center;
  display: inline-flex;
  padding: 15px;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin-right: 15px;
`;

const Tagline = styled.h2`
  color: #677bc5;
  font-weight: 400;
  text-transform: lowercase;
  white-space: nowrap;
`;

export default () => (
  <Division>
    <Content>
      <Branding>
        <Logo src={LogoSvg} />
        <Tagline>Moving & delivery</Tagline>
      </Branding>
    </Content>
  </Division>
);
