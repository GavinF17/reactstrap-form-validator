import React from 'react';
import Table from "reactstrap/es/Table";

export const PropsTable = ({props}) => (
  <Table>
    <thead>
    <th>Prop</th>
    <th>Example</th>
    <th>Description</th>
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
