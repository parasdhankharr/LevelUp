function showNews(articles) {



    // grid 2 ka working system

    let cardGrid2 = document.getElementById("card-grid-2");

    cardGrid2.innerHTML = ""; // clear old

    for (let i = 0; i <= 1; i++) {
      let article = articles[i];

      let div = document.createElement("div");
      div.className = "card-2"; 

    div.innerHTML = `
      <img 
        src="${article.image }"
        style="width:100%; height:80%; object-fit:cover; border-radius:25px;"
      >
      <h3 style="padding:10px;">${article.title}</h3>
    `;

    cardGrid2.appendChild(div);

    div.onclick = () => {
      window.open(article.url, "_blank");
    };

    
  }


    // grid 3 ka kaam 
    let cardGrid3 = document.getElementById("card-grid-3");

    for(let i =2; i <articles.length ; i+=1){
        let article = articles[i]
    
    let div = document.createElement("div");    //.   crads bna rhe hai small ones sara data fetch krna ke liye
    div.className = "card-3";                   //.   class given taki css add kr ske

    div.innerHTML = `
    <img 
      src="${article.image }"
      style="width:100%; height:70%; object-fit:cover; border-radius:20px;"
    >
    <h3 style="padding:10px;">${article.title}</h3>
  `;
   
   div.onclick = () => {
    window.open(article.url,"_blank");
   };

   cardGrid3.appendChild(div);
    }
}


const apiKey = "4b274adf8393c4b4c4d2208843758760"
async function getNews(category){

    let url = `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${apiKey}`;

    if(category){
        url += `&category=${category}`;
    }

    const res =await fetch(url)

    const news = await res.json()

    showNews(news.articles)

    console.log(news)

}

getNews()


const GlobalbriefSearch = document.getElementById("search");

GlobalbriefSearch.addEventListener("keypress", (e) => {
  try {
    if (e.key === "Enter") {
    const input = GlobalbriefSearch.value;

    fetch(`https://gnews.io/api/v4/search?q=${input}&lang=en&apikey=${apiKey}`)
      .then((res) => {return res.json()})
      .then((data) => {return showNews(data.articles)});
      
      
  }
  }
  catch (err) {
    console.log(err);
    alert("something went wrong")
  }
  
});