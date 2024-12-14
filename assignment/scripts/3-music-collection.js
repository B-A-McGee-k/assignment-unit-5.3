console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  //The above inputs need to be added to a new object
    //-collection, that is where it gets pushed to
  //Title, then artist, then yearPublished
  //This gets pushed to the collection specified
  const newItem = {
    title,
    artist,
    yearPublished,
  };
  
  collection.push(newItem)
  return newItem
};

//Turns out that I could not use a function for testing the function...
addToCollection (myCollection, "Forever", "Mystery Skulls", 2014)
addToCollection (myCollection, "You're Awful, I Love You", "Ludo", 2008);
addToCollection (myCollection, "Twenty One Pilots", "Twenty One Pilots", 2009);
addToCollection (myCollection, "Black Holes and Revelations", "Muse", 2006);
addToCollection (myCollection, "exuviae", "Darius", 2019);
addToCollection (myCollection, "Slasher", "Savant", 2018);
  
console.log(myCollection);



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
