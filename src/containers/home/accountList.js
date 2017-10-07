import React from 'react'

class accountList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => (<li key={i}><a href={"/view/"+item.login}>{item.login}</a></li>))}
      </ul>
    )
  }

}

export default accountList