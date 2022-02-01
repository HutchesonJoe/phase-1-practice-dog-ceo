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

let breedList = document.getElementById('dog-breeds');
let dogBreedArray = []
let choiceArray = []

let getBreeds = fetch('https://dog.ceo/api/breeds/list/all')
.then (response => response.json())
.then(function(data){
  let dogBreeds = data.message
  for (let dogBreed in dogBreeds){
    dogBreedArray.push(dogBreed)
    let dog = document.createElement('li');
    dog.textContent = dogBreed
    dog.addEventListener('click', function(){
      dog.style.color = 'blue'
    }) 
    breedList.appendChild(dog)
  }
})

let dropdown = document.querySelector(`select#breed-dropdown`);
dropdown.addEventListener('change', (e) => {
  
  let choice = e.target.value;
  choiceArray.unshift(choice)
  breedList.innerHTML = '';
    for (let breedName of dogBreedArray){
     let splitBreedName = breedName.split('');
     let firstLetter = splitBreedName[0];

if (firstLetter === choiceArray[0]){
  
  
     let breed = document.createElement('li');
      breed.textContent = breedName;

      document.getElementById('dog-breeds').append(breed)
    }
}})
  
  



  