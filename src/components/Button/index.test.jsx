import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
   it("render children prop", () => {
      const buttonText = "Click me";
      render(<Button>{buttonText}</Button>);
      expect(screen.getByText(buttonText)).toBeInTheDocument();
   });

   it("apply width prop", () => {
      render(<Button width="w-1/2">Click me</Button>);
      const button = screen.getByTestId("btn");
      expect(button).toHaveClass("w-1/2");
   });
});
