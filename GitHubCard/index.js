/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//Step 1 & 2:
// const promise = axios.get('https://api.github.com/users/alwaysTracieT')

// promise
//   .then(data => {
//     //results from server
//     console.log('response', data)
//   })
//   .catch(error => {
//     console.log("Site no worky, sorry boutcha", error)
//   })
// axios.get('https://api.github.com/users/alwaysTracieT').then(data => {
//   console.log('response', data)
// })


//Step 3: 
function createCard(image, description) {
  //create the elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const name = document.createElement('name')
  const paragraph = document.createElement('paragraph')
  const userName = document.createElement('userName')
}