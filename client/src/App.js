import React from 'react';
import { Container, Header, } from "semantic-ui-react";
import { Route, Switch, } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Departments from './components/Departments'



class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
        <Container style={{ padding: "25px"}}>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/departments" component={Departments} />

          </Switch>
        </Container>
      </>
    )
  }
}
export default App;
