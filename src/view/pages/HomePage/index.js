import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Heading from 'view/components/Heading';

const HomePage = () => (
    <Container>
      <Row>
        <Col>
          <Heading text="Мы рады видеть вас на нашем сайте!" />
        </Col>
      </Row>
    </Container>
);

export default HomePage;