import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import logo from "../files/resume.jpg";
export class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://static.wixstatic.com/media/4ad434_7b91119dfac6407686433afb531d59ee~mv2.png/v1/fill/w_600,h_314,al_c,q_85,enc_avif,quality_auto/electric-cars-for-sale-madison-electric-vehicles-madison%201.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Charge On Site</CardText>
            <CardActions border>
              <div className="card-links">
                <a
                  href="https://github.com/citrineos/citrineos-core"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://www.chargeonsite.com/home-2024/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://cdn.daily-sun.com/public/news_images/2022/02/28/DS-38-28-02-2022.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Nuport</CardText>
            <CardActions border>
              <div className="card-links">
                <a
                  href="https://github.com/RiemaLabs/Nuport-offchain"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://www.nuport.io/bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://shopurbcannabis.com/_next/image?url=https%3A%2F%2Fcannavate.nyc3.digitaloceanspaces.com%2Flocation%2Fcannavate.8b3cfb84-a6f0-46e8-a6ec-6a484073ce45_do.webp&w=3840&q=75) center / cover",
              }}
            ></CardTitle>
            <CardText>Shop URB</CardText>
            <CardActions border>
              <div className="card-links">
                <a
                  href="https://github.com/RiemaLabs/Nuport-offchain"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://shopurbcannabis.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://camo.githubusercontent.com/14e8a49c3123b4db9fce7c29de61000795fbbeb63519409414f517d448827cd9/68747470733a2f2f692e6962622e636f2f5a385930434a762f53637265656e73686f742d323032302d31302d33302d61742d31312d31302d30342e706e67) center / cover",
              }}
            ></CardTitle>
            <CardText>Memories</CardText>
            <CardActions border>
              <div className="card-links">
                <a
                  href="https://github.com/adrianhajdin/project_mern_memories"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://memories-project-mern.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://media.licdn.com/dms/image/v2/D5622AQF0zL1DkXUMfg/feedshare-shrink_800/feedshare-shrink_800/0/1685250753733?e=2147483647&v=beta&t=ZkWLR9TgtNF8Nkjk1MYiQo6FyqeNNcoBgD_hu7-mcnk) center / cover",
              }}
            ></CardTitle>
            <CardText>Merchant Bay</CardText>
            <CardActions border>
              <div className="card-links">
                <a
                  href="https://github.com/rohithv07/mern-ecommerce"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://www.merchantbay.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://media.istockphoto.com/id/985389550/photo/blurred-office-building-background.jpg?s=612x612&w=0&k=20&c=OPHJrhKBBHqsaysKbVaMESVIbSkY8-ERJqUrIdTgCAM=) center / cover",
              }}
            ></CardTitle>
            <CardText>Building Memo</CardText>
            <CardActions border>
              <div className="card-links">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  GitHub
                </a>
                <a
                  href="http://stage.buildingmemo.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://moslawala.com/wp-content/uploads/2019/11/ayush.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Aasuh</CardText>
            <CardActions border>
              <div className="card-links">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  GitHub
                </a>
                <a
                  href="http://stage.beeepic.com/app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bntz9goeoDGCqO_VGAJ8zyK8TsiY9ZD0dA&s) center / cover",
              }}
            ></CardTitle>
            <CardText>Migranium</CardText>
            <CardActions border>
              <div className="card-links">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  GitHub
                </a>
                <a
                  href="https://www.migranium.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Nest with Next</Tab>
          <Tab>MERN</Tab>
          <Tab>Django with React</Tab>
          <Tab>PHP</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default projects;
