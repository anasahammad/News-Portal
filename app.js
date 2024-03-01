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
        <button  class="btn ">${item.category_name}</button>
        `
        catagoryContainer.appendChild(div);

    })
    
}


const loadNews = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01")
    const data = await res.json();
    const news = data.data;
    // console.log(news)

    news.forEach((item) =>{
        console.log(item)

        const newsContainer = document.getElementById('news-container');
        const div = document.createElement('div');
        div.classList.add('card', 'lg:card-side', 'bg-base-100',' shadow-xl');
        div.innerHTML = `
        <!-- <figure>
                    <img src="" alt="Album"/>
                </figure>
                <div class="card-body">
                  <h2 class="card-title">The best fashion influencers to follow for sartorial inspiration</h2>
                  <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.

                    Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>


                        <div class="flex justify-between items-center">

                        
                    <div class="flex items-center gap-2">
                        <div class="avatar">
                            <div class="w-12 rounded-full">
                              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                          </div>

                          <div>
                            <p>Jane Cooper</p>
                            <p>Jan 10, 2022 </p>
                          </div>
                    </div>

                    <div class="flex gap-2">
                        <img src="images/carbon_view.svg" alt="">
                        <p>1.5M</p>
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

    })
   
}

loadNews();

loadAllCatagory();