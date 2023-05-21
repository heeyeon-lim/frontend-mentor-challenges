import styled from "styled-components";
import { container } from "../../styles/sharedStyles";

export const Container = styled.div`
  ${container}
  background-color: ${({ theme }) => theme.neutralColors.paleOrange};
  > .title {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.neutralColors.darkBrown};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
