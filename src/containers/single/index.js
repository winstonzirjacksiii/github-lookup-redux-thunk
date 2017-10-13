import React from 'react'
import Single from './single'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class index extends React.Component {
  showItem() {
    const itemId = this.props.match.params.githubId
    const itemData = this.props.items.filter((x)=>{return x.login === itemId})
    console.log("itemdata:", itemData)

    if (itemData.length) {
      return <Single item={itemData[0]} />
    } else {
      return "Sorry, no account found."
    }
  }
  render() {
    return (
      <section>
        {this.showItem()}
      </section>
    )
  }
}

index.propTypes = {
    items: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps, null)(index)
