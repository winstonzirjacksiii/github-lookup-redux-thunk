import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { itemFetchData } from '../../actions/github-account'
import Form from './form'
import AccountLists from './accountList'


class index extends React.Component {
  render() {
    return (
      <section>
        <h1>Github Lookup Tool</h1>
        <p>This is the landing page. Woo.</p>
        <Form fetchData={this.props.fetchData} />
        <AccountLists items={this.props.items} />
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
