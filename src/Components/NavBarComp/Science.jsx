import { Container, Col, Row } from "react-bootstrap";
import NewsList from "./NewsList";

function Science() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Science News</h1>
            <hr />
            <NewsList category="science" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Science;
