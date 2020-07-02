import React from 'react';
import {DocsNavigation} from "../components/DocsNavigation";

export const DocsLayout = ({children}) => (
  <div className="content">
    {/*<DocsNavigation/>*/}
    <div>
      <div className="docs-content">
        {children}
      </div>
    </div>
  </div>
);
