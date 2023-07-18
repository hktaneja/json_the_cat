const { fetchBreedDescription } = require('./breedFetcher');
// check the required number of command line arguments
if (process.argv.length < 3) {
  console.log('Please provide a search query as a command-line argument.');
  return;
}

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});