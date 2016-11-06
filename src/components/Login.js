import React from 'react';
import { getFunName } from "../helpers";

class Login extends React.Component {
  simpleForm(e) {
    e.preventDefault();

    const text = this.textInput.value;
    console.log(`We received this: ${text}`);
    // How to change a route based on this
    this.context.router.transitionTo(`/dashboard`);

  }

  render() {
    return (
      <form onSubmit={(e) => this.simpleForm(e)} >
        {/* This is a comment in jsx */}
        <h2>Please enter your name</h2>
        <input type="text"
          required
          placeholder="Full Name"
          defaultValue={getFunName()}
          ref={(input) => {this.textInput = input}}
        />
        <button type="submit">Go to Dashboard</button>
      </form>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
