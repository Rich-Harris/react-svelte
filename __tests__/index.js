import { wrap } from "../";
import ExampleUnwrapped from "./Example.svelte";
import React from "react";
import { render, wait } from "react-testing-library";

const Example = wrap(ExampleUnwrapped);


describe("svelte-jsx", () => {
  test("can wrap a svelte component in jsx", async () => {
    const { getByText } = render(<Example name="world" />);


    expect(getByText("Hello world!"));
  });
});
