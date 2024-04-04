const getMovies = async () => {
    const titles = [];
    let page = 1;
    while (page <= 1) {
        let res = await fetch(`https://www.omdbapi.com/?apikey=5fcfcc1f&s=Batman&page=${page}`);
        let data = await res.json();
        data.Search.forEach((movie) => titles.push(movie.Title));
        page++;
    }
    titles.forEach(title => console.log(title));
    };
    getMovies();