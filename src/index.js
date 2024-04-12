// index.js

// Callbacks
const handleClick = (element) => {
  // Add code
  document.querySelector('img.detail-image').src = element.image
  document.querySelector('h2').innerText = element.name
  document.querySelector('h3.restaurant').innerText = element.restaurant
  document.getElementById('rating-display').innerText = element.rating
  document.getElementById('comment-display').innerText = element.comment
};

const addSubmitListener = () => {
  // Add code
  let form = document.getElementById('new-ramen')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e.target)
    let ramenObj = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: document.querySelector('textarea').value
    }
 
fetch('http://localhost:3000/ramens',{
  method: "POST",
  headers: {
    'Content-Type':"Application/json"
  },
  body: JSON.stringify(ramenObj)
})
.then(res=>res.json())
.then(data=>console.log(data))
})
  }

const displayRamens = (element) => {
  // Add code
  let ramenPics = document.createElement ('div')
  ramenPics.addEventListener('click', e=>handleClick(element))
  ramenPics.innerHTML = `<img src= ${element.image}>`
 document.getElementById('ramen-menu').appendChild(ramenPics)
};

const main = () => {
  fetch('http://localhost:3000/ramens')
  .then(Response=>Response.json())
  .then(ramens=>{
  ramens.forEach(element => {
  // Invoke displayRamens here
  displayRamens(element)
  // Invoke addSubmitListener here
  addSubmitListener(element)
    })
 
  })

}
main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};