import React from 'react';
import Table from "reactstrap/es/Table";

export const PropsTable = ({props}) => (
  <Table>
    <thead>
    <tr>
      <th>Prop</th>
      <th>Example</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    {props.map(({prop, example, description}) => (
      <tr key={prop}>
        <td><code>{prop}</code></td>
        <td><code>{example}</code></td>
        <td>{description}</td>
      </tr>
    ))}
    </tbody>
  </Table>
)
