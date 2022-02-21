import { useState } from "react";
import styled from "styled-components";

const Status = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  color: var(--cloud);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Results = () => {
  const [results, setResults] = useState(null);
  if (results === null) {
    return <Status>A game will display here.</Status>;
  }
};

export default Results;
