console.log('%c HI', 'color: firebrick')

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch('https://dog.ceo/api/breeds/image/random/4')
.then (response => response.json())
.then (function(data) {
  let dogPics = data.message
  dogPics.forEach(dogPic => {
    let picsContainer = document.getElementById('dog-image-container');
    let img = document.createElement('img');
    picsContainer.appendChild(img)
    img.src = dogPic
    img.style.width = "300px"
  })
})

fetch('https://dog.ceo/api/breeds/list/all')
.then (response => response.json())
.then(function(data){
  let dogBreeds = data.message
  for (let dogBreed in dogBreeds){
    let breedList = document.getElementById('dog-breeds');
    let breed = document.createElement('li');
    breed.textContent = dogBreed
    breed.addEventListener('click', function(){
      breed.style.color = 'blue'
    })
    breedList.appendChild(breed)
  }
})

let dropdown = document.querySelector("select#breed-dropdown");
console.log(dropdown)
dropdown.addEventListener('change', filterBreeds)

function filterBreeds(){
  console.log(dropdown)
}

  