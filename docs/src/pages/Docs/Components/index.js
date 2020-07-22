import React, {Fragment} from 'react';
import {VFormSection} from "./VFormSection";
import {VFormGroupSection} from "./VFormGroupSection";
import {VInputGroupSection} from "./VInputGroupSection";

const sections = [
  {
    title: 'VForm',
    component: VFormSection
  },
  {
    title: 'VFormGroup',
    component: VFormGroupSection
  },
  {
    title: 'VInputGroup',
    component: VInputGroupSection
  }
].map(section => ({
  ...section,
  id: section.title.toLowerCase().replace(/\s/g, "-")
}));

export const Components = () => (
  <>
    <h1>Components</h1>

    {sections.map((section, index) => (
      <Fragment key={section.id}>
        {index > 0 && <hr/>}
        <div id={section.id}>
          <h2>{section.title}</h2>
          {section.component()}
        </div>
      </Fragment>
    ))}
  </>
);

export default Components;
