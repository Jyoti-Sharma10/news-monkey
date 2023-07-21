import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
    }
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e4060023b894496da090ecb27a0fa8ca';
    let data = await fetch(url);
    let pasrsedData = await data.json();
    console.log(pasrsedData);
    this.setState({articles: pasrsedData.articles});

  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
          return (
          <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl}/>
          </div>
        )
      })}
      </div>
      </div>
    );
  }
}
