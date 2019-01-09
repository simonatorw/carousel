import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Card, CardImg, CardText, CardBody,
  CardTitle,
  NavbarToggler,
  Collapse
} from 'reactstrap';

import CarouselCustom from './CarouselCustom.js';

class App extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {  
    return (
      <div className="app">
        <header className="app-header">
          <Navbar dark>
            <NavbarBrand>Carousel</NavbarBrand>
            <Nav className="app-nav">
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Disabled</NavLink>
              </NavItem>
            </Nav>
            <InputGroup className="search">
              <Input placeholder="Search" />
              <InputGroupAddon addonType="append">
                <Button color="success">Search</Button>
              </InputGroupAddon>
            </InputGroup>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <CarouselCustom />
        <section className="card-col">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </section>
        <section className="card-row">
        <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          </Card>
          <Card className="card">
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          </Card>
          <Card className="card">
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          </Card>
        </section>
        <footer className="app-footer">&copy; 2017 - 2018 Company, Inc.</footer>
      </div>
    );
  }
}

export default App;
