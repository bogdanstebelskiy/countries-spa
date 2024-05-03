import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
