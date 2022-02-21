import styled from "styled-components";
import { Search } from "react-feather";
import axios from "axios";
import { useEffect, useState } from "react";

const Form = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  svg {
    position: absolute;
    color: var(--cloud);
    width: 17px;
    height: auto;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  margin: 0 auto;
  padding: 0px 0px 0px 50px;
  background: #36373f;
  box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.15);
  border-radius: 19px;
  height: 44px;
  width: 100%;
  max-width: 964px;
  border: none;
  color: var(--frostWhite);
`;

const SearchBar = ({ setApiResults }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.rawg.io/api/games?search=${query}&key=${process.env.REACT_API_URL}`
      )
      .then(
        (response) =>
          response.data.count > 0 && setApiResults(response.data.results[0])
      );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Search />
      <Input
        placeholder="Search for a game!"
        value={query}
        onChange={handleChange}
        required
      />
    </Form>
  );
};

export default SearchBar;
