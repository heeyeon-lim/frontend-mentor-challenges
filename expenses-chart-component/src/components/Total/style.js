import styled from "styled-components";

export const Container = styled.div`
  border-top: 0.8px solid ${({ theme }) => theme.neutralColors.mediumBrown};
  margin-top: 10px;
  padding-top: 30px;

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
