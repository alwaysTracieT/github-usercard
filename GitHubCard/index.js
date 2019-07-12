

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
constcards = document.querySelector('.cards');
//Step 1 & 2:
axios.get('https://api.github.com/users/alwaysTracieT')
// promise
  .then(data => {
    //results from server
    console.log('response', data.data);
    const card = createCard(data.data);
    cards.append(card);
  })
  .catch(error => {
    console.log("Request no worky, sorry boutcha", error)
  })

//Steps 4 & 5
const followersArray = [];

const followers = [
  "brudnak", 
  "llamousse", 
  "areumjo", 
  "thisbenrogers", 
  "antilou86", 
  "DeejayEaster"
];

followers.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(data => {
    const card = createCard(data.data);
    cards.append(card);
  })
  .catch(error => {
    console.log('Check your follower-card-creator: ', error);
  })
})

// axios.get('https://api.github.com/users/alwaysTracieT/followers')
// .then(data => {
//   console.log('Returned the following results: ', data);
//   data.data.forEach(element => {followersArray.push(element.login)});
//   console.log('Current followers: ', followersArray)
// })
// .catch (error => {
//   console.log('The following error has occured with followersArray: ', error)
// })




//Step 3: 
const cards = document.querySelector('.cards');

function createCard(user) {
  //create the elements
  const card = document.createElement('div'),
    userImg = document.createElement('img'),
    cardInfo = document.createElement('div'),
    fullName = document.createElement('h3'),
    userName = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    link = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p')

  //set the styles
  card.classList.add('card');
  userImg.classList.add('img');
  cardInfo.classList.add('card-info');
  fullName.classList.add('fullName');
  userName.classList.add('username');
  
  //put in content
  userImg.src = user.avatar_url;
  fullName.textContent = user.name;
  userName.textContent = user.login;
  location. textContent = `Location: ${user.location}`;
  profile.textContent = 'Profile: ';
  link.href = user.html_url;
  link.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio || 'None *sadface*'}`;
  //appends
  card.append(userImg);
  card.append(cardInfo);
  cardInfo.append(userName, location, profile, followers, following, bio);
  profile.append(link);

  return card;
}