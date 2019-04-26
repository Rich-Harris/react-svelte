import * as React from 'react';

export default class SvelteComponent extends React.Component {
	constructor(props) {
		super(props);

		this.container = React.createRef();
		this.instance = null;
		let {component} = props;
		if (!component) {
			component = 'span';
		}
		this.element = React.createElement(component, { ref: this.container });
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
		return this.element;
	}
}
