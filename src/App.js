import React, { Component } from 'react'
import './App.css'
import Register from './Components/Register'
import Verification from './Components/Verification'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
    }
  }
  registrationHandler = (event) => {
    alert('Вы зарегистрировались')
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    this.setState({ name, email, password, isRegistered: true })
    event.preventDefault()
  }
  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Verification
            name={this.state.name}
            email={this.state.email}
          ></Verification>
        ) : (
          <Register submit={this.registrationHandler}></Register>
        )}
      </div>
    )
  }
}
export default App
