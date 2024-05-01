import { ChangeEvent, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

type SearchProps = {
  search: string;
  setSearch: (value: SetStateAction<string>) => void;
};

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--color-ui-base);
`;

export const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        value={search}
      />
    </InputContainer>
  );
};
