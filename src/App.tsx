import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";

// TODO: extract type definitions (interfaces) to .d.ts declaration files

function App() {
  const [countries, setCountries] = useState([]); // TODO: specify countries type

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
