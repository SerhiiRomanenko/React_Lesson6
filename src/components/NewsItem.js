import React, { Component } from "react";
import PropTypes from "prop-types";
import { NewsTitle } from "./NewsItem/NewsTitle";
import { NewsDescription } from "./NewsItem/NewsDescription";
import { NewsText } from "./NewsItem/NewsText";
import { NewsHashTags } from "./NewsItem/NewsHashTags";
import { NewsPhoto } from "./NewsItem/NewsPhoto";
import { NewsAuthor } from "./NewsItem/NewsAuthor";
import { NewsDelete } from "./NewsItem/NewsDelete";

export class NewsItem extends Component {
  render() {
    let { el, delNews } = this.props;
    return (
      <div
        key={el.id}
        className="newsPage__item"
        style={{ border: "1px solid blue", borderCollapse: "collapse" }}
      >
        <NewsTitle title={el.title} />
        <NewsDescription description={el.description} />
        <NewsText text={el.text} />
        <NewsHashTags hashTags={el.hashTags} />
        <NewsPhoto el={el} />
        <NewsAuthor author={el.author} />
        <NewsDelete delNews={delNews} id={el.id} />
      </div>
    );
  }
}

NewsItem.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string,
    hashTags: PropTypes.array,
    photo: PropTypes.string,
    author: PropTypes.string,
  }),
};

NewsItem.defaultProps = {
  el: [],
};
