import { MouseEventHandler } from "react";
import {
  CardBody,
  CardImage,
  CardList,
  CardListItem,
  CardTitle,
  Wrapper,
} from "../styles/Card";

type CardProps = {
  img: string;
  name: string;
  info: { title: string; description: string }[];
  onClick?: MouseEventHandler<HTMLElement>;
};

export const Card = ({ img, name, info = [], onClick }: CardProps) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}: </b>
              {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
