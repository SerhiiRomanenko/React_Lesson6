import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsHashTags extends Component {
  render() {
    const { hashTags } = this.props;
    return (
      <>
        {hashTags.length !== 0 && (
          <p className="newsPage__categories">
            <b>Hash Tags: </b>
            {hashTags.map((i) => {
              return (
                <span key={i} className="newsPage__catogorieItem">
                  {i}
                </span>
              );
            })}
          </p>
        )}
      </>
    );
  }
}

NewsHashTags.propTypes = {
  hashTags: PropTypes.array,
};

NewsHashTags.defaultProps = {
  hashTags: [],
};
