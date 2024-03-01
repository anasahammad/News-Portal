const loadAllCatagory = async () =>{
    
    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await response.json();
    const newsCatagory = data.data.news_category;

    // console.log(newsCatagory)

    newsCatagory.forEach((item) =>{
        // console.log(item)

        const catagoryContainer = document.getElementById('catagory-container');

        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="loadNews('${item.category_id}')" class="btn ">${item.category_name}</button>
        `
        catagoryContainer.appendChild(div);

    })
    
}


const loadNews = async (id) =>{
    spinner(spinner)
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json();
    const news = data.data;
    // console.log(news)
    displayNews(news)

    
    
   
}


const displayNews = (news) =>{

    
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    news.forEach((item) =>{
        console.log(item)

       
      
        const div = document.createElement('div');
        
        div.classList.add('card', 'lg:card-side', 'bg-base-100', 'shadow-xl', 'my-4');
       
        div.innerHTML =   `
        <figure>
        <img src="${item.image_url
        }" alt="Album"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">${item.title}</h2>
      <p>${item.
        details}</p>


            <div class="flex justify-between items-center">

            
        <div class="flex items-center gap-2">
            <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src="${item.author.img
                  }" />
                </div>
              </div>

              <div>
                <p>${item.author.name}
                </p>
                <p>${item.author.published_date} </p>
              </div>
        </div>

        <div class="flex gap-2">
            <img src="images/carbon_view.svg" alt="">
            <p>${item.total_view}</p>
        </div>

        <div>
            <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 " checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 "  />
                <input type="radio" name="rating-2" class="mask mask-star-2 " />
                <input type="radio" name="rating-2" class="mask mask-star-2 " />
                <input type="radio" name="rating-2" class="mask mask-star-2 " />
              </div>
        </div>

        <div>
            <img src="images/bi_arrow-right-short.svg" alt="">
        </div>
    
        
        
        `
        
        newsContainer.appendChild(div)
    })
    spinner(false);

}


const spinner = (isLoading)=>{
    const loading = document.getElementById('loading');

    if(isLoading){
        loading.classList.remove("hidden");
    }
    else{
        loading.classList.add("hidden");
    }
    

}


const handleSearch = () =>{
        const inputField = document.getElementById('input-field').value;
        if(inputField){
            loadNews(value);
        }
        else{
            alert("Please inter valid news catagory");
        }
}
loadNews("01");

loadAllCatagory();