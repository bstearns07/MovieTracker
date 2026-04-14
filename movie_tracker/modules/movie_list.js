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
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    save() {
        movieStorage.store(movies);
        return this;
    },
    add(task) {
        movies.push(task);
        return this;
    },
    delete(i) {
        this.sortMovieData(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    sortMovieData() {
        movies.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase()) ||
                a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating)

        });
    },    
    * [Symbol.iterator]() {
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movieList;