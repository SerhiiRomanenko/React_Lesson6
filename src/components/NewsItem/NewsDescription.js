import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsDescription extends Component {
  render() {
    const { description } = this.props;
    return (
      <p className="newsPage__description">
        <b>Description: </b>
        {description}
      </p>
    );
  }
}

NewsDescription.propTypes = {
  description: PropTypes.string,
};
NewsDescription.defaultProps = {};
