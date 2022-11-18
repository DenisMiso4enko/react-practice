import React from "react";

export const withToggle = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isShowMore: false,
      };
      // this.handelToggle = this.handelToggle.bind(this);
    }
    handelToggle = () => {
      this.setState((prevState) => ({
        isShowMore: !prevState.isShowMore,
      }));
    };

    render() {
      const { isShowMore } = this.props;
      return (
        <Component
          isShowMore={isShowMore}
          handelToggle={this.handelToggle}
          {...this.props}
        />
      );
    }
  };
};
 