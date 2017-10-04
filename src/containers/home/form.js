import React from 'react'

const form = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log("Will eventually lookup: ", this.refs.id.value);

    this.refs.lookupId.reset();
  },
  render() {
    return (
      <form ref="lookupId" className="m-lookupForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="id" placeholder="Username"/>
        <input type="submit" hidden/>
      </form>
    );
  }
})

export default form;