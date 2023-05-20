import React from "react";
import { Container, AmountContainer } from "./style";
import { Logo } from "../../assets/svg";

export const MyBalance = () => {
  return (
    <Container>
      <div>My balance</div>
      <AmountContainer>
        <span className="amount">$921.48</span>
        <Logo />
      </AmountContainer>
    </Container>
  );
};

export default MyBalance;
