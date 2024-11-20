import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Provider } from "react-redux";
import store from "../store/store";
import ShowCounter from "./ShowCounter";

describe("ShowCounter", () => {
  it("should be a counter zero at start", () => {
    render(
      <Provider store={store}>
        <ShowCounter />
      </Provider>
    );

    expect(screen.getByText(/Counter:/)).toHaveTextContent("Counter: 0");
  });
});
