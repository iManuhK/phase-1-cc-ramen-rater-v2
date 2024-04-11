// index.js

// Callbacks
const handleClick = (ramen) => {
  
  // Add code
  fetch(`http://localhost:3000/ramens`)
  .then(res=>res.json())
  .then(ramens=>{
    for ( let i = 0; i<ramens.length; i++){
      console.log(ramen.target)
     // document.getElementById('rating-display').innerHTML = ramens[i].rating

    } 
    })
  };
      // document.querySelectorAll('h2')[0].innerContent = `${.name}`
      // document.querySelectorAll('h3')[0].innerContent = `${ramen.target.restaurant}`
     //document.getElementById('rating-display').innerHTML = ramens[i].rating
     // document.querySelectorAll('h3')[0].innerContent = `${element.restaurant}`
      
  //     console.log(poster)
     // poster.innerHTML = ramens[i].src

//      // document.getElementById('detail-image').appendChild(poster)
    
//     }
//   })
//   //console.log(document.querySelectorAll('.detail-image')[5])

// };

const addSubmitListener = () => {
  // Add code

}

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then(res=>res.json())
  .then(ramens=>{
    ramens.forEach(element => {
  let imageRamens = document.createElement('img')
  imageRamens.addEventListener('click', handleClick)
  imageRamens.setAttribute('src', `${element.image}`)
  imageRamens.setAttribute('class', 'detail-image')
  let nameRamens = document.createElement('h2')
    nameRamens.innerHTML = `<h2>${element.name}</h2>`
  let restaurantRamens = document.createElement('h3')
    restaurantRamens.innerHTML =`<h3>${element.restaurant}</h3>`
  document.getElementById('ramen-menu').appendChild(imageRamens)
  // document.getElementById('ramen-menu').append(nameRamens)
  // document.getElementById('ramen-menu').appendChild(restaurantRamens)
    });
  })
};

const main = () => {
  // Invoke displayRamens here
  document.addEventListener('DOMContentLoaded', e=>{
    displayRamens()
  })
  
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
