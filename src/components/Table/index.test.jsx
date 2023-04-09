import { render, screen, fireEvent } from "@testing-library/react";
import Table from "@/components/Table";
import { MOCK_TEST_DATA } from "@/utils/const";

describe("Table", () => {
   it("shows family list after click", () => {
      render(<Table data={MOCK_TEST_DATA} />);
      const showButton = screen.getByText("Show (1)");
      fireEvent.click(showButton);
      expect(screen.getByText("Ijam")).toBeInTheDocument();
      expect(screen.getByText("September 1, 2002")).toBeInTheDocument();
      expect(screen.getByText("Parent")).toBeInTheDocument();
      expect(screen.getByText("Hide")).toBeInTheDocument();
   });

   it("hides family list after re-click", () => {
      render(<Table data={MOCK_TEST_DATA} />);
      const showButton = screen.getByText("Show (1)");
      fireEvent.click(showButton);
      expect(screen.getByText("Ijam")).toBeInTheDocument();
      fireEvent.click(showButton);
      expect(screen.queryByText("Ijam")).not.toBeInTheDocument();
      expect(screen.getByText("Show (1)")).toBeInTheDocument();
   });
});
