import { Container } from "../styles/Container";
import { ReactNode } from "react";
import { Wrapper } from "../styles/Main";

type MainProps = {
  children?: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
