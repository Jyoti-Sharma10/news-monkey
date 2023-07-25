import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={!imageUrl? 'https://cdn.wionews.com/sites/default/files/2023/07/20/368438-saturn-and-its-moon.png' : imageUrl }/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <div>
            <a href={newsUrl} target="_blank" className='btn btn-success btn-sm' rel="noopener noreferrer">Read More </a>
            </div> 
          </Card.Body>
        </Card>
      </div>
    );
  }
}
