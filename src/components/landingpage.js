import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl';
import logo from '../files/sadman.jpg';
export class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='Landing-grid'>
                    <Cell col={12}>
                        <Link>
                            <img
                                src={logo}
                                alt='problem to load'
                                className='avater-img'
                            />
                        </Link>

                        <div className="banner-text">
                            <h1>MERN stack web developer</h1>

                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | ReactNative | Node.js | Express | MongoDB</p>

                            <div className="social-links">

                                {/* Linked IN */}
                                < a href="#" rel="nooperer noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>


                                {/* Git Hub */}
                                < a href="https://github.com/Shadman210/" rel="nooperer noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>


                                {/* Gmail */}
                                < a href="https://join.skype.com/invite/eRrj5EFDDuGe" rel="nooperer noreferrer" target="_blank">
                                    <i className="fa fa-skype  " aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div >
        );
    }
}

export default Landingpage;
