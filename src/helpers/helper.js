import gql from 'graphql-tag';
import { Subject } from 'rxjs/Subject';
import moment from 'moment';

import RepoListItem from '../RepoList/UserListItem/UserListItem';

/**
 * q: is the query param. It'll be an object containing the query type and value
 * sort: sort response according to a particular trait. e.g follower count, date joined
 * per_page: data returned per page
 */

export const searchQuery = gql`
  query SearchForUsers($limit: Int!, $query: String!, $before: String, $after: String) {
    search(first: $limit, query: $query, type: USER, before: $before, after: $after) {
      userCount
      edges {
        node {
          ...UserInfo
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${RepoListItem.fragments.user}
`;

export const userDetailsQuery = gql`
  query getUser($repoOrder: RepositoryOrder, $login: String!) {
    user(login: $login) {
      avatarUrl
      bio
      company
      email
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      isDeveloperProgramMember
      location
      login
      organizations(first: 5) {
        nodes {
          avatarUrl
        }
      }
      repositories(first: 10, orderBy: $repoOrder) {
        totalCount
        nodes {
          id
          name
          homepageUrl
          createdAt
          description
          url
          stargazers {
            totalCount
          }
          primaryLanguage {
            color
            name
          }
        }
      }
    }
  }
`;

export function getHireableUsers(searchResult) {
  const data = searchResult.edges;
  const hireAbleUsers = data.filter(user => user.node.isHireable);
  return {
    ...searchResult,
    edges: hireAbleUsers,
  };
}

export async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all'); // eslint-disable-line
  const resJson = await res.json();
  return resJson.map(country =>
    (country.name === 'United States of America'
      ? {
        value: 'United States',
        label: 'United States',
      }
      : {
        value: country.name,
        label: country.name,
      }));
}

export const observable = new Subject();

export const filterData = {
  languages: [
    { value: 'javascript', label: 'javascript' },
    { value: 'python', label: 'python' },
    {
      value: 'java',
      label: 'java',
    },
    { value: 'php', label: 'php' },
    { value: 'html', label: 'html' },
  ],
  limitList: [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 30, label: 30 },
    { value: 40, label: 40 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
  ],
};

function parseNum(num, decPoints) {
  const numArr = num.toString().split('');
  const decimalPointIndex = numArr.indexOf('.');
  const expectedEndOfNumber = decimalPointIndex + decPoints;
  const parsedNum = numArr.slice(0, expectedEndOfNumber + 1);
  const remainder = numArr[parsedNum.length];
  if (remainder >= 5) {
    parsedNum[parsedNum.length - 1] = (parseInt(parsedNum[parsedNum.length - 1], 0) + 1).toString();
  }
  return parsedNum.join('');
}

export function userAge(date) {
  const now = moment();
  const momDate = moment(date);
  const dateDiff = now.diff(momDate, 'years', true);
  return parseNum(dateDiff, 1);
}

export const TEXT_COLOR = '#30CD9A';
