import { Container, Col, Row } from "react-bootstrap";
import NewsList from "./NewsList";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <hr />
            <h1>Top HeadLines</h1>
            <hr />
            <NewsList category="general" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
