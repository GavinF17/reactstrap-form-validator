import React from 'react';
import {Button, Col, Label, Row} from "reactstrap";
import {VForm, VFormGroup, VInput} from "reactstrap-form-validator";
import {PrismCode} from "../../../components/PrismCode";

const VFormCode = `
<VForm onValidSubmit={(values) => alert(JSON.stringify(values))}>
  <VFormGroup>
    <Label>Name</Label>
    <VInput name="name" type="text"/>
  </VFormGroup>
  <Button type="submit">Submit</Button>
</VForm>
`

export const VFormSection = () => {
  return (
    <>
      <Row>
        <Col>
          <p>
            VForm is the main wrapper for the forms, it provides the main functionality as well as the Context that the
            other components require.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <h4>Code</h4>
          <PrismCode code={VFormCode}/>
        </Col>
        <Col md={6} sm={12}>
          <h4>Rendered</h4>
          <VForm onValidSubmit={(values) => alert(JSON.stringify(values))}>
            <VFormGroup>
            <Label>Name</Label>
            <VInput name="name" type="text"/>
            </VFormGroup>
            <Button type="submit">Submit</Button>
          </VForm>
        </Col>
      </Row>
    </>
  );
};
