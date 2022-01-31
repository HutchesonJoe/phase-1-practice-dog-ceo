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

let getBreeds = fetch('https://dog.ceo/api/breeds/list/all')
.then (response => response.json())
.then(function(data){
  let dogBreeds = data.message
  for (let dogBreed in dogBreeds){
    dogBreedArray.push(dogBreed)
    let breed = document.createElement('li');
    breed.id = "breed"
    breed.textContent = dogBreed
    breed.addEventListener('click', function(){
      breed.style.color = 'blue'
    })
    breedList.appendChild(breed)
  }
})

let dropdown = document.querySelector(`select#breed-dropdown`);
dropdown.addEventListener('change', (e) => {
  let choice = e.target.value
  breedList.remove(breed)
  for (let breedName of dogBreedArray){
     let splitBreedName = breedName.split('');
     let firstLetter = splitBreedName[0];
     if (firstLetter === choice){
      let newLi = document.createElement('li');
      newLi.textContent = breedName
      breedList.appendChild(newLi)
        
     }
    }
    // let firstLetterDogs = dogBreedArray.filter(dog => choice === firstLetter)
    //   console.log(firstLetterDogs)
    //  if (){
    //   let breedLi = document.getElementById("#breed")
    //   ;
      

    //  }
})


//.textContent.split('')

//const firstLetterBreeds = getBreeds.filter(letterBreed => (letterBreed === letterBreed))

 // let allBreeds = document.querySelectorAll('li')
  // for (let firstLetterBreeds of breedList){
  //   let breedLetters = firstLetterBreeds.textContent.split('')
  //   let firstLetter = breedLetters[0]
  //     if (choice===firstLetter)
  //     {

  //       
  //     getBreed.forEach()(newBreed => {
  //       newLi.textContent = newBreed.value 
  //     })
  //   }
  // }


///you forgot all about the filter() method. Try that next.

// function filterBreeds(){
//   let choices = document.querySelectorAll('option').selectedOptions.value;
//   //let letterChoice = choices.input.value;
//   console.log(choices)
  
// let letters = breed.substring(0,1);
  


  