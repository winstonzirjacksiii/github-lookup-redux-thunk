import React from 'react'


class form extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log("trying to lookup: ", this.refs.id.value);
    this.props.fetchData(this.refs.id.value);
    this.refs.lookupId.reset();
  }

  render() {
    return (
      <form ref="lookupId" className="m-lookupForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="id" placeholder="Username"/>
        <input type="submit" hidden/>
      </form>
    );
  }
}

export default form;