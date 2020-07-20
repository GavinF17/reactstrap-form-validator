import React from 'react';
import {Col, Label, Row} from "reactstrap";
import {VForm, VFormGroup, VInput, VInputGroup} from "reactstrap-form-validator";
import {PrismCode} from "../../../components/PrismCode";

const VFormGroupCode = `
<VFormGroup>
  <Label>Full Name</Label>
  <VInputGroup>
    <VInput name="forename" type="text"/>
    <VInput name="surname" type="text"/>
  </VInputGroup>
</VFormGroup>
`

export const VInputGroupSection = () => {
  return (
    <>
      <Row>
        <Col>
          <p>
            VInputGroup is a simple wrapper for reactstrap's InputGroup
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <h4>Code</h4>
          <PrismCode code={VFormGroupCode}/>
        </Col>
        <Col md={6} sm={12}>
          <h4>Rendered</h4>
          <VForm>
            <VFormGroup>
              <Label>Full Name</Label>
              <VInputGroup>
                <VInput name="forename" type="text"/>
                <VInput name="surname" type="text"/>
              </VInputGroup>
            </VFormGroup>
          </VForm>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Props</h4>
          <p>No props are processed directly, and are passed to the wrapped InputGroup.</p>
        </Col>
      </Row>
    </>
  );
};
