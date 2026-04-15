/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines a class defining a Movie object
 **********************************************************************************************************************/

class Movie {
    /**
     * Creates an instance of a Movie object
     *
     * @param {string} title - The title of the movie
     * @param {string} genre - The movie's genre
     * @param {string} title - The movie's rating
     *
     * @returns {Movie} A movie object
     */
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    /**
     * Creates a string representation of a Movie object's data
     *
     * @returns {string} A string depicting a movie's title, genre, and rating
     */
    toString() {
        return `${this.title} | ${this.genre} | Rating ${this.rating}`;
    }
}

// exports the Movie class as a module by default under the name Movie with no curly braces needed
export default Movie;