import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Heading from 'view/components/Heading';

const NotFoundPage = () => (
    <Container>
      <Row>
        <Col>
          <Heading text="Страница не найдена"/>
        </Col>
      </Row>
    </Container>
);

export default NotFoundPage;