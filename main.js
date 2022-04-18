const baseURL = 'https://api.tvmaze.com/'

const endpoints = {
    shows: 'shows'
};

function getAllShows() {
    fetch(`${baseURL}${endpoints.shows}`, {
            method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(show => {
            const shows = document.querySelector('.shows')
            const show_block = `
                <div class="show_block">
                    <div class="show_info">
                        <ul>
                            <li>${show.rating.average}</li>
                            <li>${show.genres}</li>
                            <li>${show.language}</li>
                            <li>${show.weight} min</li>
                        </ul>
                    </div> 
                    <div class="image">
                        <img src="${show.image.medium}" alt=""/>
                    </div>
                    
                    <h3>${show.name}</h3>
                    
                     
                    
                    <button><a href="${show.officialSite}"
                    target="_blank" 
                    rel="noreferrer"
                    >More</a></button>
                </div>
             `;
            shows.innerHTML += show_block;
        });
    });
}

getAllShows();
