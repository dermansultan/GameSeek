import { useState } from "react";
import Nav from "./components/Nav";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

function App() {
  const [apiResults, setApiResults] = useState(null);

  return (
    <div className="App" style={{ width: "90%", margin: "0 auto" }}>
      <Nav />
      <SearchBar setApiResults={setApiResults} />
      <Results apiResults={apiResults} />
    </div>
  );
}

export default App;
