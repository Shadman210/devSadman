import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  color: "white",
  textAlign: "left",
};
class Experience extends Component {
  render() {
    return (
      <div
        style={{
          width: "80%",
          maxWidth: "800px",
          margin: "0 auto",
          border: "2px solid mintcream",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={cellStyle}>Company</th>
              <th style={cellStyle}>From</th>
              <th style={cellStyle}>TO</th>
              <th style={cellStyle}>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>
                <a href="https://daniyaltechnologies.com/">
                  Daniyal Technology
                </a>
              </td>
              <td style={cellStyle}>06/05/2024</td>
              <td style={cellStyle}>current</td>
              <td style={cellStyle}>Software Engineer (SDE-II) + Team Lead</td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <a href="https://6sensehq.com/">6sense</a>
              </td>
              <td style={cellStyle}>01/05/2022</td>
              <td style={cellStyle}>19/02/2024</td>
              <td style={cellStyle}>Software Engineer II</td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <a href="https://metaii.com/">metaii.inc</a>
              </td>
              <td style={cellStyle}>15/06/2019</td>
              <td style={cellStyle}>30/05/2022</td>
              <td style={cellStyle}>Full Stack Software Engineer</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Experience;
