const fs = require('fs');
const util = require('util');
const path = require('path');
const fetch = require('node-fetch');

require('dotenv').config();

const filePath = path.join(__dirname, '/src', 'fragmentTypes.json');

const YOUR_API_HOST = 'https://api.github.com';

fetch(`${YOUR_API_HOST}/graphql`, {
  method: 'POST',

  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.TOKEN}`,
  },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(body => body.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(type => type.possibleTypes !== null);
    result.data.__schema.types = filteredData;
    fs.writeFile(filePath, JSON.stringify(result.data), (err) => {
      if (err) console.error('Error writing fragmentTypes file', err);
      console.log('Fragment types successfully extracted!');
    });
  });
