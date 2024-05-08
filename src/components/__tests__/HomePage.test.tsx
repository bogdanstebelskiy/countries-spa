import { render } from "@testing-library/react";
import { describe } from "vitest";
import { HomePage } from "../../pages/HomePage";
import { useState } from "react";
import React from "react";

describe("Info", () => {
  it("api success scenario on load", async () => {
    render(<HomePage countries={countries} setCountries={setCountries} />);
    expect(countries).not.toBe([]);
  });
});

  });
});

