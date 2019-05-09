import React, { useRef, useEffect } from "react";

export default class SvelteComponent extends React.Component {
  constructor() {
    super();

    this.container = React.createRef();
    this.instance = null;
    this.div = React.createElement("div", { ref: this.container });
  }

  componentDidMount() {
    const { this: Constructor, ...props } = this.props;

    this.instance = new Constructor({
      target: this.container.current,
      props
    });
  }

  componentDidUpdate() {
    this.instance.set(this.props);
  }

  componentWillUnmount() {
    this.instance.$destroy();
  }

  render() {
    return this.div;
  }
}

export const wrap = Component => props => {
  const container = useRef(null);
  useEffect(() => {
    const instance = new Component({ target: container.current, props });
    return () => {
      instance.$destroy();
    };
  });
  return <div ref={container} />;
};
