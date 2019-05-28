import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from '../files/sadman.jpg'

export class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>SadMan Hossain</h2>
            <img
              src={logo}
              alt="Problem to lod photo"
              style={{ height: '200px' }}
            />

            <p style={{ width: "75%", margin: 'auto', paddingTop: '1em' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vero voluptates reiciendis soluta, molestiae rerum eum sed aliquam, consectetur nam corrupti quas sunt nostrum. Provident quidem facere tempore est modi.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Antom' }}>
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    (+880)1679840441
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Antom' }}>
                    <i className="fa fa-skype" aria-hidden="true"></i>
                    live:aa2ae61a6c1e43bd
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Antom' }}>
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
