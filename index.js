import React, { useRef, useEffect } from "react";

export default class SvelteComponent extends React.Component {
  constructor() {
    super();

    this.container = React.createRef();
    this.instance = null;
    this.div = React.createElement("div", { ref: this.container });
  }

  componentDidMount() {
    const { this: Constructor, ...data } = this.props;

    this.instance = new Constructor({
      target: this.container.current,
      data
    });
  }

  componentDidUpdate() {
    this.instance.set(this.props);
  }

  componentWillUnmount() {
    this.instance.destroy();
  }

  render() {
    return this.div;
  }
}

export const wrap = Component => props => {
  const container = useRef(null);
  useEffect(() => {
    //add the component to the parent, then delete the child so we don't have an uneeded extra div. Since you can't have a ref on a fragment.
    new Component({ target: container.current.parentNode, props });
    container.current.parentNode.removeChild(container.current);
  });
  return <div ref={container} />;
};
