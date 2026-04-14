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
    store(movies) {
        storage.store("movies", movies);
    },
    remove() { 
        storage.remove("movies");
    }
};

export default movieStorage;