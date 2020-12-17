import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName }
      this.sendFormDataSomewhere(form)
    }

    listOfSubmissions = () => {
      return this.state.submittedData.map(data => {
        return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
      })
    }
    // The above component will render previous form submissions on the page! We have a fully functioning controlled form.


  render() {
    return (
      <form onSubmit={event = this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;