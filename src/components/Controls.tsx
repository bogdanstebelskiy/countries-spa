import { useEffect, useState } from "react";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const regions = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

type ControlProps = {
  onSearch: (search: string, region: string) => void;
};

type Region = {
  value: string;
  label: string;
};

export const Controls = ({ onSearch }: ControlProps) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={regions}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={(region: unknown) => setRegion(region as Region)}
      />
    </Wrapper>
  );
};
