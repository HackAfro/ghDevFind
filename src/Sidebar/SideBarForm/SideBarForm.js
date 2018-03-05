import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import Switch from 'react-toggle-switch';

import 'react-select/dist/react-select.css';
import 'react-toggle-switch/dist/css/switch.min.css';

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
    const {
      language,
      onChange,
      limit,
      followerCount,
      repoCount,
      country,
    } = this.props;

    const { languages, limitList } = filterData;

    const fllwrLabel = {
      bool: this.props.followerCount.greaterThan,
      first: 'Greater than 1000',
      second: 'Less than 1000',
    };
    const repoLabel = {
      bool: this.props.repoCount.greaterThan,
      first: 'Greater than 50',
      second: 'Less than 50',
    };

    return (
      <form>
        <FormControl header="Language Options">
          <Select
            name="language-filter"
            value={language}
            onChange={e => onChange(e, 'SET_LANGUAGE')}
            options={languages}
            className="form-select"
          />
        </FormControl>

        <FormControl header="Result Limit">
          <Select
            name="result limit"
            value={limit}
            onChange={e => onChange(e, 'SET_LIMIT')}
            options={limitList}
            className="form-select"
          />
        </FormControl>

        <FormControl header="Location">
          <Select
            name="countries"
            value={country}
            onChange={e => onChange(e, 'SET_COUNTRY')}
            options={this.state.countries}
            className="form-select"
          />
        </FormControl>

        <FormControl header="Followers Count" label={fllwrLabel}>
          <Switch
            onClick={e => onChange(e, 'SET_FOLLOWER_COUNT')}
            on={followerCount.greaterThan}
          />
        </FormControl>

        <FormControl header="Repo Count" label={repoLabel}>
          <Switch
            onClick={e => onChange(e, 'SET_REPO_COUNT')}
            on={repoCount.greaterThan}
          />
        </FormControl>
      </form>
    );
  }
}

SideBarForm.propTypes = {
  language: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  followerCount: PropTypes.objectOf(PropTypes.any).isRequired,
  repoCount: PropTypes.objectOf(PropTypes.any).isRequired,
  country: PropTypes.string,
};

SideBarForm.defaultProps = {
  country: null,
};

export default SideBarForm;
