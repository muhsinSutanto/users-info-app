import React from "react";
import { render } from "@testing-library/react";
import Alert from "@/components/Alert";

describe("Alert", () => {
   it("renders children prop", () => {
      const { getByText } = render(<Alert>Hoops</Alert>);
      expect(getByText("Hoops")).toBeInTheDocument();
   });
});
