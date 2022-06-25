import { Container, Col, Row } from "react-bootstrap";
import NewsList from "./NewsList";
function Business() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Business News</h1>
            <hr />
            <NewsList category="business" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Business;
