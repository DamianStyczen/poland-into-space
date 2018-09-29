import React from "react";

class TouristInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        firstName: "undefined",
        secondName: "undefined"
      }
    };
  }
  componentDidMount() {
    if (this.props.item) {
      this.setState({ item: this.props.item });
    }
  }
  render() {
    return (
      <div className="details">
        {Object.keys(this.state.item).map(element => {
          return (
            <h3>
              {element}: {this.state.item[String(element)]}
            </h3>
          );
        })}
      </div>
    );
  }
}

export { TouristInfo };