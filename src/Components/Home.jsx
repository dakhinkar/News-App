import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import DynamicCard from "./DynamicCard/DynamicCard";
import { newsList } from "./newsList";
function Home({ url }) {
  const [headLines, setHeadLines] = useState([]);
  const urlget = url.url + url.source + url.category + url.country + url.apiKey;
  // console.log(urlget);
  useEffect(() => {
    axios
      .get(urlget)
      .then((res) => setHeadLines(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(headLines);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Top HeadLines</h1>
            <hr />
            {
              headLines.length ? (
              <div>
                {headLines.map((data, index) => (
                  <DynamicCard newsData={data} key={index.toString()} />
                ))}
              </div>
              ) : (
                <div style={{textAlign: 'center'}}>
                  <Spinner animation="grow" variant="dark" style={{margin: '5px'}} />
                  <Spinner animation="grow" variant="dark" style={{margin: '5px'}}/>
                  <Spinner animation="grow" variant="dark" style={{margin: '5px'}} />
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
