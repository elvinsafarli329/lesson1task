fetch(`https://api.themoviedb.org/3/movie/popular?api_key=17c558ac65413581dd1796acf0fd0f6a`)
    .then((res) => res.json())
    .then((data) => {
        data.results.map(movie => {
            console.log(movie.title);
        });
    })