import React, { Component } from "react";
import { withToggle } from "./withToggle";

class PhoneTile extends Component {
  render() {
    const { specs, isShowMore, handelToggle } = this.props;
    const textToggle = isShowMore ? "Show Less" : "Show More";
    return (
      <div className="app-phone-tile">
        <div className="app-phone-tile__title">Mobile Specs:</div>
        <div className="app-phone-tile__row">
          {`Size: ${specs.width} ${specs.height} ${specs.depth}`}
        </div>
        {isShowMore && <span>{`Resolution: ${specs.screenResolution}`}</span>}
        <button onClick={handelToggle}>{textToggle}</button>
      </div>
    );
  }
}

export const ToggledPhoneTile = withToggle(PhoneTile);
