function showNews(articles) {

    let mainCard = document.getElementById("main-card")
    mainCard.innerHTML = `
    <div style="position:relative; height:100%; width:100%;">
    
    <img 
      src="${articles[0].image || 'https://picsum.photos/800/400'}"
      style="width:100%; height:100%; object-fit:cover; border-radius:25px; object-position: center "
    >

    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      padding:20px;
      color:white;
      border-radius:25px;
    ">
      <h2>${articles[0].title}</h2>
    </div>

  </div>
`;}


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