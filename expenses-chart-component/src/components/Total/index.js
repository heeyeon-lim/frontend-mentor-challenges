import React from "react";
import { Container, Content } from "./style";

const Total = () => {
  return (
    <Container>
      <div className="title">Total this month</div>
      <Content>
        <div className="amount">$478.33</div>
        <div className="change-percentage">
          <strong>+2.4%</strong> from last month
        </div>
      </Content>
    </Container>
  );
};
export default Total;
