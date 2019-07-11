//Steps 4 & 5
const followersArray = [];
axios.get('https://api.github.com/users/alwaysTracieT/followers')
.then(data => {
  console.log('Returned the following results: ', data);
  data.data.forEach(element => {followersArray.push(element.login)});
  console.log('Current followers: ', followersArray)
})
.catch (error => {
  console.log('The following error has occured with followersArray: ', error)
})

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(data => {
    createCard(data);
    console.log('Card created for: ', follower);
  })
  .catch(error => {
    console.log('Check your follower-card-creator: ', error);
  })
})

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



//Step 3: 

const thatKide = createCard();

function createCard(data) {
  //create the elements
  const card = document.createElement('card')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('card-info')
  const fullName = document.createElement('name')
  const userName = document.createElement('username')

  //set the styles
  card.classList.add('card')
  userImg.classList.add('img')
  cardInfo.classList.add('card-info')
  fullName.classList.add('name')
  userName.classList.add('username')

  //put in content
  fullName.textContent = data.data.name;
  userName.textContent = data.data.login;
  userLocation.textContent = `Location ${data.data.location}`;
  userProfile.textContent = `Profile ${data[profileLink]}`;
  userFollowers.textContent = `Followers ${data[followers_url]}`;
  userFollowing.textContent = `Following ${data[following_url]}`;
  userBio.textContent = `User Bio: ${data[bio]}`;

  profileLink.href = data[html_url];
  userImage.src = data[avatar_url];
  userImage.alt = "Image of the User"

  return card;

}