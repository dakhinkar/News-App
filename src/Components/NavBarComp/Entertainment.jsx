import { Container, Col, Row } from "react-bootstrap";
import NewsList from "./NewsList";

function Entertainment() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Entertainment News</h1>
            <hr />
            <NewsList category="entertainment" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Entertainment;
