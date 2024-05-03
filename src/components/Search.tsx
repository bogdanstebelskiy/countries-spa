import { ChangeEvent, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";
import { InputContainer, Input } from "../styles/Search";

type SearchProps = {
  search: string;
  setSearch: (value: SetStateAction<string>) => void;
};

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
