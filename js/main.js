//// fetching the api for quotes

const quote = document.getElementById("quote")
const button = document.getElementById("more")

async function getMotivation(){
  try{

    const res = await fetch("https://dummyjson.com/quotes/random");
    const info = await res.json();

    quote.innerText = `"${info.quote}" ~ ${info.author}`;

  }
  catch(error){
    quote.innerText = "Internal Error" ;
  }
}

getMotivation();

button.addEventListener("click",getMotivation)
