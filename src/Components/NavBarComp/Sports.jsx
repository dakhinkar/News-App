import { Container, Col, Row } from "react-bootstrap";
import NewsList from "./NewsList";
function Sports() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Sports News</h1>
            <hr />
            <NewsList category="sports" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sports;
