import React from 'react';
import { Container, Header, } from "semantic-ui-react";
import { Route, Switch, } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Departments from './components/Departments'
import DepartmentView from './components/DepartmentView'
import DepartmentForm from './components/DepartmentForm'


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
            <Route expct path='/departments/:id' component={DepartmentView} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </>
    )
  }
}
export default App;
