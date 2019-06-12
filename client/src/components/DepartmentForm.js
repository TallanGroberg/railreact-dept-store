import React from 'react';
import { Form, } from 'semantic-ui-react';


class DepartmentForm extends React.Component {
  state = [
      { name: '', },
    ]

    handleChange = (e) => {
      this.setState({ name: e.target.value})


    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.add(this.state)
      this.setState({ name: ""})
      console.log("handleSubmit")
    }

  render() {
    return (
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <Form.Input
        label="Department"
        placeholder="Department"
        required
        value={this.state.name}
        onChange={this.handleChange}

         />

        </Form.Group>
        <Form.Button>
        submit
        </Form.Button>
      </Form>
      </>
    )
  }
}

export default DepartmentForm
