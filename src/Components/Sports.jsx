import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import DynamicCard from "./DynamicCard/DynamicCard";
function Sports(){
    const [sportsNews, setSportsNews] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b0e90a8e8ae84f938024b373b63b29e2"
        )
        .then((res) => setSportsNews(res.data.articles))
        .catch((err) => console.log(err));
    }, []);
    return (<div>
      <Container>
          <Row>
              <Col>
              |<br/>
              <hr/>
              <h1>
                  Sports News
              </h1>
              <hr/>
              {
                  sportsNews.length ? (<div>
                      {
                          sportsNews.map((data, index) => (
                              <DynamicCard newsData={data} key={index}/>
                          ))
                      }
                  </div>) : (
                      <div style={{textAlign : 'center'}}>
                          <Spinner
                              animation="grow"
                              variant="dark"
                              style={{margin : '5px'}}
                          />
                           <Spinner
                              animation="grow"
                              variant="dark"
                              style={{margin : '5px'}}
                          />
                           <Spinner
                              animation="grow"
                              variant="dark"
                              style={{margin : '5px'}}
                          />
                      </div>
                  )
              }
              </Col>
          </Row>
      </Container>
      
      </div>);
}

export default Sports;