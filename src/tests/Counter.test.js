// import necessary react testing library helpers here
import { render, screen, fireEvent } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

test("renders counter message", () => {
  // render component
  render(<Counter />);
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  //render component
  render(<Counter />);
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText("0");
  expect(count).toBeInTheDocument();
});

test("clicking + increments the count", () => {
  //render component
  render(<Counter />);
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(incrementButton);
  const count = screen.getByText("1");
  expect(count).toBeInTheDocument();
});

test("clicking - decrements the count", () => {
  //render component
  render(<Counter />);
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByRole("button", { name: "-" });
  fireEvent.click(decrementButton);
  const count = screen.getByText("-1");
  expect(count).toBeInTheDocument();
});
