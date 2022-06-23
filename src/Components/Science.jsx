import React, { useState, useEffect } from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import DynamicCard from "./DynamicCard/DynamicCard";

function Science() {
  const [scienceNews, setScienceNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b0e90a8e8ae84f938024b373b63b29e2"
      )
      .then((res) => setScienceNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Science News</h1>
            <hr />
            {scienceNews.length ? (
              <div>
                {scienceNews.map((data, index) => (
                  <DynamicCard newsData={data} key={index} />
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

export default Science;
