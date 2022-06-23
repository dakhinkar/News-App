import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import DynamicCard from "./DynamicCard/DynamicCard";

function World({ url }) {
  const [worldHeadLines, setWorldHeadLines] = useState([]);
  const urlget = url.url + url.source+  url.apiKey;
  console.log(urlget);
  useEffect(() => {
    axios
      .get(urlget)
      .then((res) => setWorldHeadLines(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(worldHeadLines);
  return (
    <div>
      <Container>
        <Row>
          <Col >
            <br />
            <hr />
            <h1>Worlds News</h1>
            <hr /> 
            <div>
              {worldHeadLines.map((data, index) => (
                <DynamicCard newsData={data} key={index.toString()} />
              ))}
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default World;
