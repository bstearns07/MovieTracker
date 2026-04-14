/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines a class defining a Movie object
 **********************************************************************************************************************/

class Movie {

    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    toString() {
        return `${this.title} | ${this.genre} | Rating ${this.rating}`;
    }
}

// exports the Movie class as a module by default under the name Movie with no curly braces needed
export default Movie;