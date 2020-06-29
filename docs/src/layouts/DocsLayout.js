import React from 'react';
import {DocsNavigation} from "../components/DocsNavigation";

export const DocsLayout = ({children}) => (
  <>
    <DocsNavigation/>
    {children}
  </>
);
