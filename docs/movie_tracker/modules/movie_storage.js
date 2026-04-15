/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines an object literal defining logic for movie storage manipulation
 **********************************************************************************************************************/

import * as storage from 'storage';
import Movie from 'movie';

const movieStorage = {
    /**
     * Retrieves all movies from web storage as an array
     *
     * @returns {Movie[]}
     */
    retrieve() { 
        const movies = [];
        const movieArray = storage.retrieve("movies");
        if(movieArray) {
            for(let obj of movieArray) {
                movies.push(new Movie(obj.title, obj.genre, obj.rating));
            }
        }
        return movies;
    },
    /**
     * Saves an array of movies into web storage
     *
     * @param {Movie[]} movies An array of Movie objects to save
     *
     * @returns {IterableIterator<Movie>} An iterator that yields each Movie in the collection.
     */
    store(movies) {
        storage.store("movies", movies);
    },
    /**
     * Removes all movies from web storage
     *
     * @returns {void}
     */
    remove() { 
        storage.remove("movies");
    }
};

export default movieStorage;