import React, { Component } from "react";

export class NewsDelete extends Component {
  render() {
    const { delNews, id } = this.props;
    return <button onClick={() => delNews(id)}>Delete news</button>;
  }
}
