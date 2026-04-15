/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines an object that extends storage capabilities to add/edit/delete individual or all movies
 *                      in storage. Also allows for movieList interation support
 **********************************************************************************************************************/

import movieStorage from 'movie_storage';

let movies = [];         // private variable

const movieList = {
    /**
     * Retrieves the movies in web storage as a Movie array
     *
     * @returns {Movie[]|null} A Movie array
     */
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    /**
     * Save a movie array into web storage
     *
     * @returns {movieList} The current movieList object to allow for method chaining
     */
    save() {
        movieStorage.store(movies);
        return this;
    },
    /**
     * Adds a movie to the movieList's private array
     *
     * @returns {movieList} The current movieList object to allow for method chaining
     */
    add(task) {
        movies.push(task);
        return this;
    },
    /**
     * Removes a movie from the movieList's array by index
     *
     * @param i The index of the movie you wish to delete
     *
     * @returns {movieList} The current movieList object to allow for method chaining
     */
    delete(i) {
        this.sortMovieData(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    /**
     * Deletes all the movies in the movieList array
     *
     * @returns {movieList} The current movieList object to allow for method chaining
     */
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    /**
     * Sorts the movieList array by title, then genre, then rating
     *
     * @returns {movieList} The current movieList object to allow for method chaining
     */
    sortMovieData() {
        movies.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase()) ||
                a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating)
        });
        return this;
    },
    /**
     * Makes the MovieList iterable using "for...of"
     *
     * @returns {IterableIterator<Movie>} An iterator that yields each Movie in the collection.
     */
    * [Symbol.iterator]() {
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movieList;