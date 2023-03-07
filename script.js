//https://pokeapi.co/api/v2/pokemon-form/1/
let pokeName = document.querySelector(".name");
let pokeType = document.querySelector(".type");
let pokePhoto = document.querySelector(".pokemon");
let arrowLeft = document.querySelector(".arrowLeft");
let arrowRight = document.querySelector(".arrowRight");
let input = document.querySelector(".input");
let search = document.querySelector(".search");

let i = 1;

const getAPIData = (order) => {
  fetch(`https://pokeapi.co/api/v2/pokemon-form/${order}/`)
  .then((response) => response.json())
  .then((data) => {
    pokeType.innerHTML = data.types[0].type.name;
    pokeName.innerHTML = data.name;
    pokePhoto.src = data.sprites.front_default;
    console.log(data)
  });
}
arrowRight.addEventListener("click", () =>{
    i++;
    if(i >=1008){
        getAPIData(1);
        i=1;
    }
    else{
        getAPIData(i);
    }
})
arrowLeft.addEventListener("click", () =>{
    i--;
    if(i === 0){
        getAPIData(1008);
        i=1008;
    }
    else{
        getAPIData(i);
    }
})
search.addEventListener("click", () =>{
 i = input.value ;
 getAPIData(i);
})

getAPIData(1)