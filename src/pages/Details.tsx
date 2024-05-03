import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

//TODO: extract to one type file
type Country = {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
};

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null); // TODO: specify country object type that comes from api

  console.log(country);

  useEffect(() => {
    if (!name) {
      return;
    }
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
    </>
  );
};
