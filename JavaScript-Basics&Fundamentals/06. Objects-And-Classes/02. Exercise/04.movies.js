function solve(input) {
    let movies = [];

    for (let inputRow of input) {
        if (inputRow.includes('addMovie')) {
            let tokens = inputRow.split('addMovie ');
            let movieName = tokens[1];
            addMovie(movieName);
        } else if (inputRow.includes('directedBy')) {
            let [ movieName, director ]
                = inputRow.split(' directedBy ');
            addDirector(movieName, director);
        } else {
            let [ movieName, date ]
                = inputRow.split(' onDate ');
            addDate(movieName, date);
        }
    }

    for(let movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }
    
    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, directorName) {
        let foundMovie = movies
            .find(m => m.name === movieName);

        if (foundMovie) {
            foundMovie.director = directorName;
        }
    }

    function addDate(movieName, date) {
        let foundMovie = movies
            .find(m => m.name === movieName);

        if (foundMovie) {
            foundMovie.date = date;
        }
    }
}