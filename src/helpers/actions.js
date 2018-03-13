export default {
  handleSearch(e) {
    this.setState({ anchor: e.target.value });
    // We are not changing the filterTerm directly, rather the anchor and then after user pauses
    // typing, we update the filterTerm using the anchor
    this.makeSearch();
  },

  // Make search function to handle making direct calls to the API when user is done typing.
  makeSearch() {
    this.setState(prevState => ({ filterTerm: prevState.anchor }));
  },

  handlePagination(e, action) {
    if (action === 'NEXT') {
      this.setState({
        after: this.afterAnchor,
        before: this.beforeAnchor,
        loadingRepos: true,
      });
    } else {
      this.setState({
        before: this.beforeAnchor,
        after: this.afterAnchor,
        loadingRepos: true,
      });
    }
  },
};
