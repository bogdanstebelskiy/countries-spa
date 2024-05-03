import { ReactNode } from "react";
import { Wrapper } from "../styles/List";

type ListProps = {
  children?: ReactNode;
};

export const List = ({ children }: ListProps) => {
  return <Wrapper>{children}</Wrapper>;
};
