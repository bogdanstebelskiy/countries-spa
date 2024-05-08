import { render, screen } from "@testing-library/react";
import { NotFound } from "../../pages/NotFound";

describe("NotFound", () => {
  it("checking whether NotFound page exists in the document", () => {
    render(<NotFound />);
    const notFoundElement = screen.getByTestId("notfound-page");
    expect(notFoundElement).toBeInTheDocument();
  });
});
