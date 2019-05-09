import SvelteComponent, { wrap } from "../";
import ExampleUnwrapped from "./Example.svelte";
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

describe("react-svelte", () => {
  test("can wrap a svelte component in jsx", () => {
    const Example = wrap(ExampleUnwrapped);
    const { getByText } = render(<Example name="world" />);

    expect(getByText("Hello world!")).toBeInTheDocument();
  });

  test("can render using a host component", () => {
    const { getByText } = render(
      <SvelteComponent this={ExampleUnwrapped} name="world" />
    );

    expect(getByText("Hello world!")).toBeInTheDocument();
  });
});
