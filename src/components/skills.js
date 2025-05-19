import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div
            style={{
              width: "80%",
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "1rem", // space between text and bar
            }}
          >
            <span style={{ minWidth: "120px", fontWeight: "bold" }}>
              {this.props.skill}
            </span>
            <ProgressBar
              style={{ flexGrow: 1 }}
              progress={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
