# react-svelte

### Use Svelte components inside React apps (using High order component).

```jsx
import { render } from "react-dom";
import { wrap } from "react-svelte";
import SvelteWidget from "./Widget.html";

const Widget = wrap(SvelteWidget);

function MyReactApp(props) {
  return (
    <div>
      <p>this is a Svelte component inside a React app:</p>
      <Widget {...props} />
    </div>
  );
}

render(<MyReactApp />, document.querySelector("main"));
```

### Use Svelte components inside React apps (using host component).

```jsx
import { render } from "react-dom";
import SvelteComponent from "react-svelte";
import Widget from "./Widget.svelte";

function MyReactApp(props) {
  return (
    <div>
      <p>this is a Svelte component inside a React app:</p>
      <SvelteComponent this={Widget} {...props} />
    </div>
  );
}

render(<MyReactApp />, document.querySelector("main"));
```

Demo [here](https://react-svelte.surge.sh), source code for the demo [here](demo).

## Why not just compile Svelte components to custom elements?

Because React's support for custom elements is [somewhat lacking](https://custom-elements-everywhere.com/).

## Limitations

This is a fairly basic integration, some things don't currently work and possibly never will:

- the value of `this` is fixed; changing it after the initial render will have no effect
- you can't use `<slot>`

## License

[LIL](LICENSE)
