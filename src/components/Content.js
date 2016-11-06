import React from 'react';

class Content extends React.Component {
  // Method to handle form submit button
  createFish(e) {
    e.preventDefault();
    const Fish = {
      name: this.name.value
    }
    this.props.addFish(Fish); // add the fish to the state by calling addFish method
    this.form.reset(); // reset the form
  }

  render() {
    return (
      <div className="Content">
        <p>Inventory</p>
        <form
          ref={(input) => this.form = input}
          onSubmit={(e) => this.createFish(e)}
        >
          <input ref={(input) => {this.name = input}} type="text"/>
          <button type="submit">Click Me</button>
        </form>

        <div className="row">
          <div className="two columns center">Two</div>
          <div className="ten columns center">Ten</div>
        </div>
      </div>
    )
  }
}

export default Content;
