import React from 'react';
import {Container} from "reactstrap";

export const Header = ({dark, toggleTheme}) => (
  <Container fluid id="header" className="header fixed-top">
    <div className="general-content">
      <h1 className="float-left">Reactstrap Form Validation</h1>
      <h3 className={`float-right ${dark ? 'far' : 'fas'} fa-lightbulb mt-2`} onClick={toggleTheme}/>
    </div>
  </Container>
);
