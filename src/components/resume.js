/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import logo from "../files/resume.jpg";
export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={logo}
                alt="problem to load image"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>MD Sadman Hossain</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              To purse a stable career in a reputed organization to utilize my
              optimum skills and experience which will take pride of me.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Dhaka Bangladesh</p>
            <h5>Phone</h5>
            <p>01679840441</p>
            <h5>Email</h5>
            <p>sakibsadman2525@gmail.com</p>
            <h5>Web</h5>
            <p>shadman210.github.io/devSadman</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="My University"
              schoolDescription="East West University"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>

            <Skills skill="JavaScript" progress={90} />
            <Skills skill="HTML/CSS" progress={85} />
            <Skills skill="React" progress={80} />
            <Skills skill="Node.js" progress={75} />
            <Skills skill="MongoDB" progress={70} />
            <Skills skill="Next.js" progress={70} />
            <Skills skill="Docker" progress={65} />
            <Skills skill="AWS" progress={60} />
            <Skills skill="NoSQL DB" progress={65} />
            <Skills skill="NoSQL DB" progress={60} />
            <Skills skill="Python" progress={55} />
            <Skills skill="Team Lead" progress={75} />
            <Skills skill="PHP" progress={30} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
