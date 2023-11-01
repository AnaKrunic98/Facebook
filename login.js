const submitBtn = document.querySelector('#submit')
const members = []

async function fetchData() { 
  // fetch('./data/members.json')
  // .then(response => response.json())
  // .then(data => members.push(...data.members))
  // .catch(error => console.error('Error fetching JSON:', error));

   try {
     const endpointURL = "./data/members.json";
     const response = await fetch(endpointURL);
 
     if (response.status !== 200) {
       console.log('An error occurred:', response.status);
     } else {
       const data = await response.json();
       members.push(...data.members);
     }
   } catch (error) {
   }
}

fetchData()
let user
function login () {
  const emailValue = document.querySelector("#email").value
  const passwordValue =  document.querySelector("#password").value


  let userIndex = members.findIndex((member) => {
    return member.email === emailValue && member.password === passwordValue
  })

  if (userIndex !== -1) {
    document.location.href = `/?name=${members[userIndex].username}`
  } else {
      alert("Input correct email and password")
  }

}


submitBtn.addEventListener('click', login)