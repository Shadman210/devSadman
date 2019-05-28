import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
export class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }


  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '175px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #1</CardTitle>
            <CardText>
              ePurchase
          </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> LiveDemo </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '175px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #2</CardTitle>
            <CardText>
              OnLine Cfaeteria Management System
          </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> LiveDemo </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '175px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #3</CardTitle>
            <CardText>
              Smart Fish Farming Using IOT
          </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> LiveDemo </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>



        </div>

      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Vanilla js</h1>
        </div>
      )
    }

    else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is PHP</h1>
        </div>
      )
    }

    else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is IOT</h1>
        </div>
      )
    }
  }


  render() {
    return (

      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


        <Grid >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>

    );
  }
}

export default projects;

