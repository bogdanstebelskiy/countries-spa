import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { filterByCode } from "../config";
import {
  Wrapper,
  InfoImage,
  InfoTitle,
  ListGroup,
  List,
  ListItem,
  Meta,
  TagGroup,
  Tag,
} from "../styles/Info";

type InfoProps = Country;

export const Info = (props: InfoProps) => {
  const {
    name,
    nativeName,
    flags,
    capital,
    population,
    region,
    subregion,
    topLevelDomain = [],
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c: Country) => c.name)));
    }
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name} />
      {/* TODO: use map to output list */}
      <div>
        <InfoTitle></InfoTitle>
        <ListGroup>
          <List>
            {
              [
                { label: "Native Name: ", data: nativeName },
                { label: "Population: ", data: population },
                { label: "Region: ", data: region },
                { label: "Sub Region: ", data: subregion },
                { label: "Capital: ", data: capital }
              ].map(({ label, data }) => (
                <ListItem key={label}>
                  <b>{label}</b>
                  {data}
                </ListItem>
              ))
            }
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain: </b>
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies.map((c) => (
                <span key={c.code}>{c.name}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Language: </b>
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {!borders.length ? (
            <span>There are no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((b) => (
                <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
