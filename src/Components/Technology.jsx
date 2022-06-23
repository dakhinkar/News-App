import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import DynamicCard from "./DynamicCard/DynamicCard";

function Technology({ url }) {
  const [technologyNews, setTechnologyNews] = useState([]);
  const urlget = url.url + url.source + "?category=technology" + url.apiKey;

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=technology&apiKey=b0e90a8e8ae84f938024b373b63b29e2"
      )
      .then((res) => setTechnologyNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(technologyNews);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Technology News</h1>
            <hr />
            {technologyNews.length ? (
              <div>
                {technologyNews.map((data, index) => (
                  <DynamicCard newsData={data} key={index.toString()} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Spinner
                  animation="grow"
                  variant="dark"
                  style={{ margin: "5px" }}
                />
                <Spinner
                  animation="grow"
                  variant="dark"
                  style={{ margin: "5px" }}
                />
                <Spinner
                  animation="grow"
                  variant="dark"
                  style={{ margin: "5px" }}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Technology;
