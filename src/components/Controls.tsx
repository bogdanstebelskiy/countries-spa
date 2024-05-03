import { useEffect, useState } from "react";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import { Wrapper } from "../styles/Controls";
import { regions } from "./RegionsList";

type ControlProps = {
  onSearch: (search: string, region: string) => void;
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
