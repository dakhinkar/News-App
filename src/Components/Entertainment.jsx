import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import DynamicCard from "./DynamicCard/DynamicCard";

function Entertainment() {
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b0e90a8e8ae84f938024b373b63b29e2"
      )
      .then((res) => setEntertainmentNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (<div>
    <Container>
        <Row>
            <Col>
            |<br/>
            <hr/>
            <h1>
                Entertainment News
            </h1>
            <hr/>
            {
                entertainmentNews.length ? (<div>
                    {
                        entertainmentNews.map((data, index) => (
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

export default Entertainment;
