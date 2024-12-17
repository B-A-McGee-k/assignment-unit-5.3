console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  //The above inputs need to be added to a new object
    //-collection, that is where it gets pushed to
  //Title, then artist, then yearPublished
  //This gets pushed to the collection specified
  const newTape = {
    title,
    artist,
    yearPublished,
  };
  
  collection.push(newTape)
  return newTape
};

//Turns out that I could not use a function for testing the function...
addToCollection (myCollection, "Forever", "Mystery Skulls", 2014)
addToCollection (myCollection, "You're Awful, I Love You", "Ludo", 2008);
addToCollection (myCollection, "Twenty One Pilots", "Twenty One Pilots", 2009);
addToCollection (myCollection, "Black Holes and Revelations", "Muse", 2006);
addToCollection (myCollection, "2YR, 38:33:941", "Halley Labs Associates", 2020);
addToCollection (myCollection, "Slasher", "Savant", 2018);
addToCollection (myCollection, "Broken Bride", "Ludo", 2005);
  
console.log(myCollection);

/*
- [ ] Create a function named `showCollection`. This function should:
  - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects).
  - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.

- [ ] Use and test the `showCollection` function.
*/
let albums = [];
let artists = [];
let publishing = [];

function showCollection (collection) {
  for (let i = 0; i < collection.length; i++) {
    if (i == 0) {
      albums = []; artists = []; publishing = []; 
    }
    albums.push(collection[i].title);
    artists.push(collection[i].artist);
    publishing.push(collection[i].yearPublished);



    console.log(albums[i] + ' by ' + artists[i] + ', published ' + publishing[i])
}
}

console.log(showCollection(myCollection));

/*
- [ ] Create a function named `findByArtist`. This function should:
  - Take in a `collection` parameter. Remember, we want to be able to search any collection!
  - Take in an `artist` (string) parameter.
  - Create an empty array to hold any matching results, if any.
  - Loop through the `collection` and add any album objects with a matching artist to the array.
  - Return the array with the matching results. (If no results are found, an empty array should be returned).

- [ ] Use and test the `findByArtist` function.
  - Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
  - Check that for artists with multiple matches, all are returned.
*/

// Need a var to collect all instances of albums that are found and a var to collec the artist to search for
let artistAlbums = [];
let artistfound = '';

function findByArtist (collection, findArtist) {
  for (let i = 0; i < collection.length; i++) {
    if (i == 0) {
      artistAlbums = [];
    }
    if (collection[i].artist == findArtist) {
      artistAlbums.push(collection[i]);
    }
  }
  return artistAlbums
}

console.log(findByArtist(myCollection, 'Ludo'))




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
