import styled from "styled-components";
import { container } from "../../styles/sharedStyles";

export const Container = styled.div`
  ${container}
  border-top: 0.5px solid #afa7a2;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: ${({ theme }) => theme.neutralColors.paleOrange};
  > .title {
    color: ${({ theme }) => theme.neutralColors.mediumBrown};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.neutralColors.darkBrown};

  > .amount {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > .change-percentage {
    color: ${({ theme }) => theme.neutralColors.mediumBrown};
    display: flex;
    flex-direction: column;
    align-items: center;
    > strong {
      color: ${({ theme }) => theme.neutralColors.darkBrown};
    }
  }
`;
