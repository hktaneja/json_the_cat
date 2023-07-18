const request = require('request');
const cmdLineArguments = process.argv;

// check the required number of command line arguments
if (cmdLineArguments.length < 3) {
  console.log('Please provide a search query as a command-line argument.');
  return;
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${cmdLineArguments[2]}`;
request(url, (error, response, body) => {
  if (error) {
    console.log(error.message);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found.');
    return;
  }
  console.log(data[0].description);
});
