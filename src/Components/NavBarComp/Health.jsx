import { Container, Col, Row } from "react-bootstrap";
import NewsList from "./NewsList";

function Health() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Health News</h1>
            <hr />
            <NewsList category="health" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Health;
