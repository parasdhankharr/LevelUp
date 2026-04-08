function showNews(articles) {

    let mainCard = document.getElementById("main-card")
    mainCard.innerHTML = `
    <div style="position:relative; height:100%; width:100%;">
    
    <img 
      src="${articles[0].image || 'https://picsum.photos/800/400'}"
      style="width:100%; height:90%; object-fit:cover; border-radius:25px; "
    >

    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      padding:5px;
      color:black;
      border-radius:25px;
    ">
      <h2>${articles[0].title}</h2>
    </div>

    </div> `;
    mainCard.onclick = () => {
    window.open(articles[0].url, "_blank");
};
    // grid 2 ka working system

    let cardGrid2 = document.getElementById("card-grid-2");

    for(let i=1;i<=2;i++){
        let article = articles[i]
    
    cardGrid2.innerHTML=`
    <div style="position:relative; height:100%; width:100%;">
    
    <img 
      src="${article.image || 'https://picsum.photos/800/400'}"
      style="width:100%; height:80%; object-fit:cover; border-radius:25px; "
    >

    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      padding:20px;
      color:black;
      border-radius:25px;

    ">
      <h2>${article.title}</h2>
    </div>

    </div> `;

    }


    // grid 3 ka kaam 
    let cardGrid3 = document.getElementById("card-grid-3");

    for(let i =3; i < articles.length ; i+=1){
        let article = articles[i]
    
    let div = document.createElement("div");    //.   crads bna rhe hai small ones sara data fetch krna ke liye
    div.className = "card-3";                   //.   class given taki css add kr ske

    div.innerHTML = `
    <img 
      src="${article.image || 'https://picsum.photos/300/200'}"
      style="width:100%; height:70%; object-fit:cover; border-radius:20px;"
    >
    <h3 style="padding:10px;">${article.title}</h3>
  `;
   
   div.onclick = () => {
    window.open(article[i].url,"_blank");
   };

   cardGrid3.appendChild(div);
    }
}


const apiKey = "475367f7354f3465d78babb6a2f6110e"
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