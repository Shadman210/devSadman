import React from 'react'
import Landingpage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume'
import { Switch, Route } from 'react-router-dom'
function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Landingpage} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/resume' component={Resume} />
        </Switch>
    )
}

export default Main
