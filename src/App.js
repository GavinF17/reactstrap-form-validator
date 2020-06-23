import React, {useState} from 'react';
import {VForm, VFormFeedback, VInput, VInputGroup} from "./reactstrap-form-validator";
import "./assets/reactivestrap.scss"
import {Button, Container, FormGroup, InputGroup, Label, Row} from "reactstrap";

function App() {
  const [externalErrors, setExternalErrors] = useState({});

  const onValidSubmit = (values) => {
    setExternalErrors({
      email: ["Incorrect email format"],
      forename: ['something forename'],
      surname: ['something surname']
    });
  };

  const onInvalidSubmit = (values, errors) => console.log("onInvalidSubmit", values, errors);

  return (
    <div className="mt-5">
      <Container>
        <VForm
          onValidSubmit={onValidSubmit}
          onInvalidSubmit={onInvalidSubmit}
          externalErrors={externalErrors}
        >
          <Row>
            {/*<VFormGroup>*/}
            {/*  <VInput name="forename" validators={{minLength: {value: 2, message: "Too damn short"}}}/>*/}
            {/*</VFormGroup>*/}
          </Row>
          <Row>
            <FormGroup>
              <Label for="forename">Name</Label>
              <VInputGroup for={["forename", "surname"]}>
                <VInput value="a" name="forename"
                        validators={{minLength: {value: 2, message: "Forename, Too damn short"}}}/>
                <VInput value="a" name="surname"
                        validators={{minLength: {value: 2, message: "Surname Too damn short"}}}/>
              </VInputGroup>
              <VFormFeedback for={["forename", "surname"]}/>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <InputGroup>
                <VInput value="aa" name="forename"
                        validators={{minLength: {value: 2, message: "Forename, Too damn short"}}}/>
                <VInput value="aa" name="surname"
                        validators={{minLength: {value: 2, message: "Surname Too damn short"}}}/>
              </InputGroup>
              <VFormFeedback for={["forename", "surname"]}/>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label className="is-invalid" for="email">Email</Label>
              <VInput value="a" name="email"
                // validators={{minLength: {value: 2, message: "Too damn short"}}}
              />
              <VFormFeedback for="email"/>
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
