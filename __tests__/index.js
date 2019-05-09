import SvelteComponent, { wrap } from "../";
import ExampleUnwrapped from "./Example.svelte";
import React from "react";
import { render, cleanup, wait, prettyDOM } from "react-testing-library";
import "jest-dom/extend-expect";
afterEach(cleanup);
afterAll(() => {
  console.log(prettyDOM(document.body));
});
describe("react-svelte", () => {
  test("can wrap a svelte component in jsx", () => {
    const Example = wrap(ExampleUnwrapped);
    const { getByText } = render(<Example name="world" />);

    expect(getByText("Hello world!")).toBeInTheDocument();
  });

  test("can render using a host component", async () => {
    const { getByText } = render(
      <SvelteComponent this={ExampleUnwrapped} {...{ name: "foo" }} />
    );

    await wait();
    expect(getByText("Hello foo!")).toBeInTheDocument();
  });
});
