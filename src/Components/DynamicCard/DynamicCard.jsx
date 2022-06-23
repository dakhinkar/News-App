import React from "react";
import "./DynamicCard.css";
import { Card, Button } from "react-bootstrap";


function DynamicCard({ newsData }) {
 console.log(newsData);
 const {author, content, description,publishedAt, source, title, url, urlToImage} = newsData;
  return (
    <Card >
      <div className="card-img">
        <Card.Img variant="top" src={urlToImage ? urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjz9bcXNQOJfpczyMt4WxRx5LU4nRZJqoEXQ&usqp=CAU" } />
        <span>{publishedAt.substring(0, publishedAt.indexOf('T'))}</span>
        
      </div>
      <div className="card-body">
        <Card.Header as="h4">{title}</Card.Header>
        <Card.Body>
          <Card.Text>
           {description ? description : 'description not given'}
          </Card.Text>
          <Button variant="primary">More Details</Button>
        </Card.Body>
      </div>
    </Card>
   
  );
}

export default DynamicCard;
