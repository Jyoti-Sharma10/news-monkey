import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Button from "react-bootstrap/Button";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4060023b894496da090ecb27a0fa8ca&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});  
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      articles: parsedData.articles ,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    try {
      const { page } = this.state;
  
      if (page > 1) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4060023b894496da090ecb27a0fa8ca&page=${
          page - 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({loading: true}); 
        let data = await fetch(url);
        if (!data.ok) {
          throw new Error("Failed to fetch data from NewsAPI");
        }
        let parsedData = await data.json();
        this.setState({
          page: page - 1,
          articles: parsedData.articles,
          loading: false
        });
      } else {
        console.log("You are on the first page.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  handleNextClick = async () => {
    try {
      const { page } = this.state;
      const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize); // Assuming 20 articles per page
  
      if (page < totalPages) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4060023b894496da090ecb27a0fa8ca&page=${
          page + 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({loading: true}); 
        let data = await fetch(url);
        if (!data.ok) {
          throw new Error("Failed to fetch data from NewsAPI");
        }
        let parsedData = await data.json();
        this.setState({
          page: page + 1,
          articles: parsedData.articles,
          loading: false
        });
      } else {
        console.log("No more pages.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <Button
            variant="success"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </Button>
          <Button variant="success" onClick={this.handleNextClick}
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>
            Next &rarr;
          </Button>
        </div>
      </div>
    );
  }
}
