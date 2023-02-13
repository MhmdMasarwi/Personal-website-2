import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage__header">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <h1>Welcome kamel store...</h1>
          </Col>
          <Col xs={12}>
            <Button
              onClick={() => {
                navigate("/AllProduct");
              }}
              variant="primary"
            >
              seeAllProducts
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
