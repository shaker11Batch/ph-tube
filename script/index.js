const loadCategory = () => {
    fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
}


const loadVideos= ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
    .then( data =>displayVideo(data.videos))
}




const displayCategory = (categories) => {
    // console.log(categories)
    const categoryContainer = document.getElementById('category-container')
    for (const cat of categories) {
        // console.log(cat)
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv)
    }
}


const displayVideo =(videos) => {
    console.log(videos)
    const videoContainer = document.getElementById('video-contaier')
    videos.forEach(video => {
        console.log(video)
        const videoCard = document.createElement('div')
        videoCard.innerHTML = `
        
        `
    });
}

loadVideos()
loadCategory()