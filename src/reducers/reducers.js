
function reducer(e, action) {
  this.resetFilter();
  switch (action) {
    case 'SET_FOLLOWER_COUNT':
      this.setState(p => (
        {
          followerCount: { greaterThan: !p.followerCount.greaterThan },
          query: p.country
            ? `location:${p.country} language:${p.language} followers:${
              !p.followerCount.greaterThan ? '>1000' : '<1000'
            } repos:${p.repoCount.greaterThan ? '>50' : '<50'}`
            : `language:${p.language} followers:${
              !p.followerCount.greaterThan ? '>1000' : '<1000'
            } repos:${p.repoCount.greaterThan ? '>50' : '<50'}`,
        }
      ));
      break;

    case 'SET_REPO_COUNT':
      this.setState(p => (
        {
          repoCount: { greaterThan: !p.repoCount.greaterThan },
          query: p.country
            ? `location:${p.country} language: ${p.language} followers:${
              p.followerCount.greaterThan ? '>1000' : '<1000'
            } repos:${!p.repoCount.greaterThan ? '>50' : '<50'}`
            : `language: ${p.language} followers:${
              p.followerCount.greaterThan ? '>1000' : '<1000'
            } repos:${!p.repoCount.greaterThan ? '>50' : '<50'}`,
        }
      ));
      break;

    case 'SET_LIMIT':
      this.setState({ limit: e ? e.value || 50 : 50 });
      break;

    case 'SET_LANGUAGE':
      if (e) {
        this.setState(p => (
          {
            language: e.value || '',
            query: p.country
              ? `location:${p.country} language:${e.value || ''} followers:${
                p.followerCount.greaterThan ? '>1000' : '<1000'
              } repos:${p.repoCount.greaterThan ? '>50' : '<50'}`
              : `language:${e.value || ''} followers:${
                p.followerCount.greaterThan ? '>1000' : '<1000'
              } repos:${p.repoCount.greaterThan ? '>50' : '<50'}`,
          }
        ));
      }
      break;

    case 'SET_COUNTRY':
      if (e) {
        this.setState(p => (
          {
            country: e.value || '',
            query: e.value ? `location:${e.value} language:${p.language} followers:${
              p.followerCount.greaterThan ? '>1000' : '<1000'
            } repos:${p.repoCount.greaterThan ? '>50' : '<50'}` : `language:${p.language} followers:${
              p.followerCount.greaterThan ? '>1000' : '<1000'
            } repos:${p.repoCount.greaterThan ? '>50' : '<50'}`,
          }
        ));
      }
      break;

    default:
      break;
  }
}

export default reducer;
