import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import logo from "../files/sadman.jpg";

export class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>SadMan Hossain</h2>
            <img
              src={logo}
              alt="Problem to lod photo"
              style={{ height: "200px" }}
            />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I specialize in building intelligent and scalable software
              solutions tailored to business needs. If you're looking to grow
              your business, explore new ideas, or need help developing a
              digital product, I’m available to collaborate. Let’s discuss how
              we can build impactful software together and take your vision
              forward.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Antom" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    +8801679840441
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Antom" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    +8801540386947
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Antom" }}
                  >
                    <i className="fa fa-google" aria-hidden="true"></i>
                    sakibsadman2525@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
