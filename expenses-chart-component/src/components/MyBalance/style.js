import styled from "styled-components";
import { container } from "../../styles/sharedStyles";

export const Container = styled.div`
  ${container}
  background-color: ${({ theme }) => theme.primaryColors.softRed};
  color: ${({ theme }) => theme.neutralColors.paleOrange};
  margin-bottom: 15px;
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .amount {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
