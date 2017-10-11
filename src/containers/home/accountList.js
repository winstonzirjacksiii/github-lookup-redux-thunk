import React from 'react'
import { Link } from 'react-router-dom'

class accountList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => (<li key={i}><Link to={"/view/"+item.login}>{item.login}</Link></li>))}
      </ul>
    )
  }

}

export default accountList