import * as React from 'react';

export default class SvelteComponent extends React.Component {
	constructor() {
		super();

		this.container = React.createRef();
		this.instance = null;
		this.div = React.createElement('div', { ref: this.container });
	}

	componentDidMount() {
		const { this: Constructor, ...props } = this.props;

		this.instance = new Constructor({
			target: this.container.current,
			props
		});
	}

	componentDidUpdate() {
		this.instance.$set(this.props);
	}

	componentWillUnmount() {
		this.instance.$destroy();
	}

	render() {
		return this.div;
	}
}
