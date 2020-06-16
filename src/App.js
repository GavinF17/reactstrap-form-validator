import React from 'react';
import {VForm, VFormFeedback, VFormGroup, VInput, VInputGroup} from "./reactstrap-form-validator";
import "./assets/reactivestrap.scss"
import {Button, Container, FormGroup, InputGroup, Row} from "reactstrap";

function App() {
  const onValidSubmit = (values) => console.log("onValidSubmit", values);
  const onInvalidSubmit = (values, errors) => console.log("onInvalidSubmit", values, errors);

  return (
    <div className="mt-5">
      <Container>
        <VForm
          onValidSubmit={onValidSubmit}
          onInvalidSubmit={onInvalidSubmit}
          externalErrors={{email: ['Something was wrong']}}
        >
          <Row>
            {/*<VFormGroup>*/}
            {/*  <VInput name="forename" validators={{minLength: {value: 2, message: "Too damn short"}}}/>*/}
            {/*</VFormGroup>*/}
          </Row>
          <Row>
            <VFormGroup>
              <VInputGroup>
                <VInput value="a" name="forename"
                        validators={{minLength: {value: 2, message: "Forename, Too damn short"}}}/>
                <VInput value="a" name="surname"
                        validators={{minLength: {value: 2, message: "Surname Too damn short"}}}/>
                <VFormFeedback for={["forename", "surname"]}/>
              </VInputGroup>
            </VFormGroup>
          </Row>
          <Row>
            <FormGroup>
              <InputGroup>
                <VInput value="a" name="forename"
                        validators={{minLength: {value: 2, message: "Forename, Too damn short"}}}/>
                <VInput value="a" name="surname"
                        validators={{minLength: {value: 2, message: "Surname Too damn short"}}}/>
                <VFormFeedback for={"forename"}/>
              </InputGroup>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <VInput value="a" name="email"
                // validators={{minLength: {value: 2, message: "Too damn short"}}}
              />
              <VFormFeedback/>
            </FormGroup>
          </Row>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </VForm>
      </Container>
    </div>
  );
}

export default App;
