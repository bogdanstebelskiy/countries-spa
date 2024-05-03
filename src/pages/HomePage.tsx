import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, SetStateAction } from "react";
import { ALL_COUNTRIES } from "../config";

type HomePageProps = {
  countries: CountryShort[];
  setCountries: (value: SetStateAction<CountryShort[]>) => void;
};

export const HomePage = ({ countries, setCountries }: HomePageProps) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const navigate = useNavigate();

  const handleSearch = (search?: string, region?: string) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c: CountryShort) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              onClick={() => navigate(`/country/${c.name}`)}
              key={c.name}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
