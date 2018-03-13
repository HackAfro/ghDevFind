import React from 'react';
import Select from 'react-select';
import Switch from 'react-toggle-switch';

import 'react-select/dist/react-select.css';
import 'react-toggle-switch/dist/css/switch.min.css';

import { AppContext } from '../../Provider/Provider';
import { getCountries, filterData } from '../../helpers/helper';
import FormControl from './FormControl';

class SideBarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }

  async componentWillMount() {
    const countries = await getCountries();
    this.setState({ countries });
  }

  render() {
    const { languages, limitList } = filterData;

    const fllwrLabel = {
      first: 'Greater than 1000',
      second: 'Less than 1000',
    };
    const repoLabel = {
      first: 'Greater than 50',
      second: 'Less than 50',
    };

    return (
      <AppContext.Consumer>
        {({ callbacks, state }) => (
          <form>
            <FormControl header="Language Options">
              <Select
                name="language-filter"
                value={state.language}
                onChange={e => callbacks.filterChangeHandler(e, 'SET_LANGUAGE')}
                options={languages}
                className="form-select"
              />
            </FormControl>

            <FormControl header="Result Limit">
              <Select
                name="result limit"
                value={state.limit}
                onChange={e => callbacks.filterChangeHandler(e, 'SET_LIMIT')}
                options={limitList}
                className="form-select"
              />
            </FormControl>

            <FormControl header="Location">
              <Select
                name="countries"
                value={state.country}
                onChange={e => callbacks.filterChangeHandler(e, 'SET_COUNTRY')}
                options={this.state.countries}
                className="form-select"
              />
            </FormControl>

            <FormControl
              header="Followers Count"
              label={{ ...fllwrLabel, bool: state.followerCount.greaterThan }}
            >
              <Switch
                onClick={e => callbacks.filterChangeHandler(e, 'SET_FOLLOWER_COUNT')}
                on={state.followerCount.greaterThan}
              />
            </FormControl>

            <FormControl
              header="Repo Count"
              label={{ ...repoLabel, bool: state.repoCount.greaterThan }}
            >
              <Switch
                onClick={e => callbacks.filterChangeHandler(e, 'SET_REPO_COUNT')}
                on={state.repoCount.greaterThan}
              />
            </FormControl>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default SideBarForm;
