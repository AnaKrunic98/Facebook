const mainEl = document.querySelector("main")
const usernameFromUrl =  new URLSearchParams(window.location.search).get('name')
const posts = []

async function fetchData() { 
  try {
    const endpointURL = "./data/posts.json";
    const response = await fetch(endpointURL);

   //  if (response.status !== 200) {
   //    console.log('An error occurred:', response.status);
   //  } else {
      const data = await response.json();
      posts.push(...data.posts);
      updatePosts()

  } catch (error) {
 console.log('An error occurred:', response.status);
  }
}
fetchData()

function renderWelcomeTitle () {
    const welcomeTitle = document.createElement('h3')
    welcomeTitle.innerText = `Welcome, ${usernameFromUrl}!`
    mainEl.appendChild(welcomeTitle)
}
renderWelcomeTitle()

function updatePosts() {
    posts.forEach(post => {
        const postDiv = `
        <div class="post">
        <div class="user-div">
        <img src="${post.url}"/>
        <p>${post.username}</p>
        </div>
        <p class="post-text">${post.text}</p>
        <span class="like"><img src="${post.likeUrl}"/> ${post.likes}<span>
        </div>
        `
        mainEl.innerHTML += postDiv
    
    })
}


