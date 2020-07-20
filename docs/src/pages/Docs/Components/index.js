import React, {useState} from 'react';
import {Button, FormGroup, Label, Row} from "reactstrap";
import {VForm, VFormFeedback, VInput, VInputGroup} from "reactstrap-form-validator";
import {VFormSection} from "./VFormSection";

const sections = [
  {
    title: 'VForm',
    component: VFormSection
  }
];

export const Components = () => {
  const [externalErrors, setExternalErrors] = useState({});
  const [forename, setForename] = useState("bb");

  const onValidSubmit = (values) => {
    if (externalErrors.email) {
      setExternalErrors({
        forename: ['something forename'],
        surname: ['something surname']
      });
    } else {
      setExternalErrors({
        email: ["Incorrect email format"],
        forename: ['something forename'],
        surname: ['something surname']
      });
    }

    setForename("gavin")
  };

  const onInvalidSubmit = (values, errors) => console.log("onInvalidSubmit", values, errors);


  return (
    <>
      <h1>Components</h1>

      {sections.map(section => (
        <div id={section.title.toLowerCase().replace(/\s/g, "-")}>
          <h2>{section.title}</h2>
          {section.component()}
        </div>
      ))}

      {/*<VForm*/}
      {/*  onValidSubmit={onValidSubmit}*/}
      {/*  onInvalidSubmit={onInvalidSubmit}*/}
      {/*  externalErrors={externalErrors}*/}
      {/*>*/}
      {/*  <Row>*/}
      {/*    /!*<VFormGroup>*!/*/}
      {/*    /!*  <VInput name="forename" validators={{minLength: {value: 2, message: "Too damn short"}}}/>*!/*/}
      {/*    /!*</VFormGroup>*!/*/}
      {/*  </Row>*/}
      {/*  <Row>*/}
      {/*    <FormGroup>*/}
      {/*      <Label for="forename">Name</Label>*/}
      {/*      <VInputGroup>*/}
      {/*        <VInput value={forename} name="forename"*/}
      {/*                validators={{*/}
      {/*                  minLength: {value: 2, message: "Forename, Too damn short"},*/}
      {/*                  maxLength: {value: 5, message: "Forename, Too damn long"},*/}
      {/*                  pattern: {value: "^[a-z]*$"}*/}
      {/*                }}/>*/}
      {/*        <VInput value="" name="surname"*/}
      {/*                validators={{minLength: {value: 2, message: "Surname Too damn short"}, required: true}}/>*/}
      {/*      </VInputGroup>*/}
      {/*      <VFormFeedback for={["forename", "surname"]}/>*/}
      {/*    </FormGroup>*/}
      {/*  </Row>*/}
      {/*  /!*<Row>*!/*/}
      {/*  /!*  <FormGroup>*!/*/}
      {/*  /!*    <InputGroup>*!/*/}
      {/*  /!*      <VInput value="aa" name="forename"*!/*/}
      {/*  /!*              validators={{minLength: {value: 2, message: "Forename, Too damn short"}}}/>*!/*/}
      {/*  /!*      <VInput value="aa" name="surname"*!/*/}
      {/*  /!*              validators={{minLength: {value: 2, message: "Surname Too damn short"}}}/>*!/*/}
      {/*  /!*    </InputGroup>*!/*/}
      {/*  /!*    <VFormFeedback for={["forename", "surname"]}/>*!/*/}
      {/*  /!*  </FormGroup>*!/*/}
      {/*  /!*</Row>*!/*/}
      {/*  <Row>*/}
      {/*    <FormGroup>*/}
      {/*      <Label className="is-invalid" for="email">Email</Label>*/}
      {/*      <VInput value="a" name="email"*/}
      {/*        // validators={{minLength: {value: 2, message: "Too damn short"}}}*/}
      {/*      />*/}
      {/*      <VFormFeedback for="email"/>*/}
      {/*    </FormGroup>*/}
      {/*  </Row>*/}
      {/*  <FormGroup>*/}
      {/*    <Button>Submit</Button>*/}
      {/*  </FormGroup>*/}
      {/*</VForm>*/}
    </>
  )
};

export default Components;
