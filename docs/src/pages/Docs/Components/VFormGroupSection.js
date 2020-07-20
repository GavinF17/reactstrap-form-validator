import React from 'react';
import {Col, Label, Row} from "reactstrap";
import {VForm, VFormGroup, VInput} from "reactstrap-form-validator";
import {PrismCode} from "../../../components/PrismCode";

const VFormGroupCode = `
<VFormGroup>
  <Label>Forename</Label>
  <VInput name="forename" type="text"/>
</VFormGroup>
`

export const VFormGroupSection = () => {
  return (
    <>
      <Row>
        <Col>
          <p>
            VFormGroup is a simple wrapper for reactstrap's FormGroup
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
              <Label>Forename</Label>
              <VInput name="forename" type="text"/>
            </VFormGroup>
          </VForm>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Props</h4>
          <p>No props are processed directly, and are passed to the wrapped FormGroup.</p>
        </Col>
      </Row>
    </>
  );
};
