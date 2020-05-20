import React from 'react';
import {VForm, VFormGroup, VInput, VInputGroup} from "./reactivestrap";
import "./assets/reactivestrap.scss"
import {Container, FormGroup, Input, InputGroup, Row} from "reactstrap";

function App() {
  return (
    <div className="mt-5">
      <Container>

        <VForm>
          <Row>
            <VFormGroup>
              <VInput name="forename" validators={{minLength: {value: 2, message: "Too damn short"}}}/>
            </VFormGroup>
          </Row>
          <Row>
            <VFormGroup>
              <VInputGroup>
                <VInput name="surname" validators={{maxLength: {value: 10, message: "Too damn long"}}}/>
                <VInput/>
              </VInputGroup>
            </VFormGroup>
          </Row>
          <Row>
            <FormGroup>
              <InputGroup>
                <Input/>
                <Input/>
              </InputGroup>
            </FormGroup>
          </Row>
        </VForm>
      </Container>
    </div>
  );
}

export default App;
