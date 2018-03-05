import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import debounce from 'lodash/debounce';

import AppBar from '../App/AppBar';
import AppBody from '../App/AppBody';

import { observable } from '../helpers/helper';
import UserDetails from '../UserDetails/UserDetails';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTerm: '',
      anchor: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    // Use a debounce function to delay calling function until user is done typing
    this.makeSearch = debounce(this.makeSearch, 1000);
    observable.subscribe({
      next: (action) => {
        if (action === 'RESET_FILTER') {
          this.setState({ filterTerm: '', anchor: '' });
        }
      },
    });
  }

  handleSearch(e) {
    this.setState({ anchor: e.target.value });
    // We are not changing the filterTerm directly, rather the anchor and then after user pauses
    // typing, we update the filterTerm using the anchor
    this.makeSearch();
  }

  // Make search function to handle making direct calls to the API when user is done typing.
  makeSearch() {
    this.setState(prevState => ({ filterTerm: prevState.anchor }));
  }

  render() {
    const { match } = this.props;
    const Body = (<AppBody
      filterTerm={this.state.filterTerm}
      anchorTerm={this.state.anchor}
      onChange={this.handleSearch}
    />);
    return (
      <div className="App">
        <main className="main-content">
          <AppBar />
          <Route path={match.url} exact render={() => Body} />
          <Route path="/user/:id/" component={UserDetails} />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default Main;
