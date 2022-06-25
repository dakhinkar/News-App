import { Container, Row, Col } from "react-bootstrap";

import NewsList from "./NewsList";
function Technology() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Technology News</h1>
            <hr />
            <NewsList category="technology" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Technology;
