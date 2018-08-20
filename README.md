# react-svelte

Use Svelte components inside React apps.

```jsx
import { render } from 'react-dom';
import SvelteComponent from 'react-svelte';
import Widget from './Widget.html';

function MyReactApp(props) {
	return (
		<div>
			<p>this is a Svelte component inside a React app:</p>
			<SvelteComponent this={Widget} {...props}/>
		</div>
	)
}

render(<MyReactApp/>, document.querySelector('main'));
```

See the [demo](demo) folder for a more complete example.

## Why not just compile Svelte components to custom elements?

Because React's support for custom elements is somewhat lacking.


## Limitations

This is a fairly basic integration, some things don't currently work and possibly never will:

* the value of `this` is fixed; changing it after the initial render will have no effect
* you can't use `<slot>`


## License

[LIL](LICENSE)