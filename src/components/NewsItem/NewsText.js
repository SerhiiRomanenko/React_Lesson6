import React, { Component } from "react";
import PropsTypes from "prop-types";

export class NewsText extends Component {
  render() {
    const { text } = this.props;
    return (
      <p
        className="newsPage__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
}

NewsText.propsTypes = {
  content: PropsTypes.string.isRequired,
};

NewsText.defaultProps = {};
