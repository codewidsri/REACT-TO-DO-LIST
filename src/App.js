import "./App.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1>To-Do-List</h1>
          </Col>
        </Row>
        <Row>
          <Col>name</Col>
          <Col>email</Col>
        </Row>
        <Row>
          <Col>harish</Col>
          <Col>aadu@gmailc.om</Col>
        </Row>
        <Button variant="warning">hi</Button>
        <Form className="my-3">
          <Form.Control type="email" placeholder="enter your email" />
        </Form>
      </Container>
    </>
  );
}

export default App;
