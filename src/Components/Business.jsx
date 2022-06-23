import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import DynamicCard from "./DynamicCard/DynamicCard";
function Business() {
  const [businessNews, setBusinessNews] = useState([]);
  //   const getUrl = url.url + "?category=" + url.apiKey;

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b0e90a8e8ae84f938024b373b63b29e2"
      )
      .then((res) => setBusinessNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(businessNews);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Business News</h1>
            <hr />
            {businessNews.length ? (
              <div>
                {businessNews.map((data, index) => (
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

export default Business;
