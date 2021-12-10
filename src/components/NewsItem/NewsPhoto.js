import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsPhoto extends Component {
  render() {
    const { el } = this.props;
    return (
      <>
        {el.photo && (
          <img
            className="newsPage__photo"
            src={el.photo}
            alt="pic"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
            }}
          />
        )}
      </>
    );
  }
}

NewsPhoto.propTypes = {
  el: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

NewsPhoto.defaultProps = {};
