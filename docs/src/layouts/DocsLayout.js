import React from 'react';
import {DocsNavigation} from "../components/DocsNavigation";
import Container from "reactstrap/es/Container";

export const DocsLayout = ({children}) => (
  <>
    <DocsNavigation/>
    <Container fluid>
      <div className="docs-content">
        {children}
      </div>
    </Container>
  </>
);
