import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { itemFetchData } from '../../actions/github-account'
import Form from './form'
import AccountLists from './accountList'
import Single from '../single/single'

class index extends React.Component {
  isLoading() {
    if (this.props.itemIsLoading) {
      return (<div className='m-loading is-loading'>Is Loading...</div>)
    }
  }

  isErrored() {
    if (this.props.itemHasErrored) {
      return (<div className="m-error">Oh no, something went wrong!</div>)
    }
  }

  showSingle() {
    if (this.props.items.length > 0) {
      return (
        <section className="m-landing_single l-twoPart l-padding_twoPart">
          <Single item={this.props.items[this.props.items.length-1]} full={false} />
        </section>
      )
    }
  }

  render() {
    return (
      <section className="l-container">
        <section className="m-landing_lookUp l-twoPart l-padding_twoPart">
          <h1>Github Lookup Tool</h1>
          <p>This is the landing page. Woo.</p>
          <Form fetchData={this.props.fetchData} />
          {this.isLoading()}
          {this.isErrored()}
          <AccountLists items={this.props.items} />
        </section>
        {this.showSingle()}
      </section>
    )
  } 
}

index.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    itemHasErrored: PropTypes.bool.isRequired,
    itemIsLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        itemHasErrored: state.itemHasErrored,
        itemIsLoading: state.itemIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(itemFetchData(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
