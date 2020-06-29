import React from 'react';
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

const DocCard = ({icon, header, description, link}) => (
  <Col className="mb-4" sm={12} md={4}>
    <Link to={link || '#'}>
      <Card>
        <CardHeader>
          <i className={"mr-2 " + icon}/>
          {header}
        </CardHeader>
        <CardBody>{description}</CardBody>
      </Card>
    </Link>
  </Col>
);

const HomePage = () => (
  <Container fluid>
    <Row className="text-center mt-5 mb-5">
      <h2 className="ml-auto mr-auto">
        Simple wrapper components for form validation with
        <a href="https://github.com/reactstrap/reactstrap"> reactstrap</a>
      </h2>
    </Row>

    <Row>
      <DocCard
        header="Getting Started"
        icon="fas fa-fast-forward"
        description="Learn how to quickly get started, including installation and quick start guide"
        link="/docs/getting-started"
      />

      <DocCard
        header="Components"
        icon="fas fa-laptop-code"
        description="See what wrapper components are available and how to use them"
        link="/docs/components"
      />

      <DocCard
        header="Validators"
        icon="far fa-check-circle"
        description="Learn the provided validators and learn how to extend them with custom functions"
        link="/docs/validators"
      />
    </Row>
  </Container>
);

export default HomePage;
