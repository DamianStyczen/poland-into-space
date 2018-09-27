import React from "react";
import ReactDOM from "react-dom";

export default class TouristsList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Last name</th>
            <th>First name</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kowalski</td>
            <td>Jan</td>
            <td>
              <button>Szczegóły</button>
            </td>
            <td>
              <button>Usuń</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
