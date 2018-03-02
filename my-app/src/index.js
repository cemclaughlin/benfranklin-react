import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import {Image} from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import {List} from 'semantic-ui-react'
import {Search} from 'semantic-ui-react'

class Top extends React.Component {

  render() {
    return (
        <Container className="new">
        <Grid columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column verticalAlign = "middle">
            <Image centered src="http://benfranklinhawaii.com/images/logo_img.png" width="300" height="68"/>
          </Grid.Column>
          <Grid.Column position = "right" verticalAlign = "middle"><Search></Search> </Grid.Column>
        </Grid>
        </Container>
    );
  }
}


class MidMenu extends React.Component {

  render() {
    return (
        <Container>
          <Menu centered fluid widths = {7} inverted color = 'grey'>
            <Menu.Item>Projects</Menu.Item>
            <Dropdown item text="Events">
              <Dropdown.Menu>
                <Dropdown.Item>Calendar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Locations</Menu.Item>
            <Menu.Item>Specials</Menu.Item>
            <Dropdown item text="Programs">
              <Dropdown.Menu>
                <Dropdown.Item>Membership</Dropdown.Item>
                <Dropdown.Item>My Locker</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Blogs</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Container>
    );
  }
}

class MidPic extends React.Component {

  render() {
    return (
        <Image src="http://benfranklinhawaii.com/images/_homepageImage/JanuaryWebBanner.jpg"/>
  );
  }
}

class Footer extends React.Component {

  render() {
    return (
        <Container className = "yellow-background">
          <h2 style="color:white" class="ui centered header">Crafting Is Fun Website</h2>
        </Container>
    );
  }
}

class BenFrank extends React.Component {

  render() {
    return (
        <div>
          <Top/>
          <MidMenu/>
          <MidPic/>
          <Footer/>
        </div>
  );
  }
}

ReactDOM.render(<BenFrank/>, document.getElementById('root'));
