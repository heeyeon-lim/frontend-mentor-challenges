import React from "react";
import { Container } from "./style";
import BarChart from "../BarChart";
import Total from "../Total";

const Summary = () => {
  return (
    <Container>
      <div className="title">Spending - Last 7 days</div>
      <BarChart />
      <Total />
    </Container>
  );
};

export default Summary;
