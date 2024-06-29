import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React from "react";

class RangeSlider extends React.Component {
  state = {
    textValue: null,
    percent: null,
    start: 20,
    end: 800,
  };

  onSlide = (render, handle, value, un, percent) => {
    this.setState({
      textValue: value[0].toFixed(2),
      percent: percent[0].toFixed(2),
    });
  };
  updateValues = (value) => {
    this.setState({
      start: value[0],
      end: value[1],
    });
  };
  render() {
    const { start, end } = this.state;
    return (
      <div>
        <Nouislider
          connect
          range={{ min: 0, max: 1000 }}
          start={[20, 800]}
          onSlide={this.onSlide}
          onUpdate={(value) => this.updateValues(value)}
        />
        {start && end && (
          <div className="price-number mt-3">
            <span className="amount">
              ${start} - ${end}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default RangeSlider;
