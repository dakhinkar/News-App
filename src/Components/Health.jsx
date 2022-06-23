import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import DynamicCard from "./DynamicCard/DynamicCard";

function Health() {
  const [healthNews, setHealth] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b0e90a8e8ae84f938024b373b63b29e2"
      )
      .then((res) => setHealth(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log("health ", healthNews);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Health News</h1>
            <hr />
            {healthNews.length ? <div>
                {
                    healthNews.map((data, index) => (
                        <DynamicCard newsData={data} key={index}/>
                    ))
                }
            </div> : <div style={{textAlign : 'center'}}>
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
                </div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Health;
