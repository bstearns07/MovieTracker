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

let tasks = [];         // private variable

const movieList = {
    load() {
        tasks = movieStorage.retrieve();
        return this;
    },
    save() {
        movieStorage.store(tasks);
        return this;
    },
    add(task) {
        tasks.push(task);
        return this;
    },
    delete(i) {
        this.sortByDueDate(); // sort so in same order as page
        tasks.splice(i, 1);
        return this;
    },
    clear() {
        tasks.length = 0;
        movieStorage.remove();
        return this;
    },
    sortByDueDate() {
        tasks.sort((a, b) => a.dueDate - b.dueDate);
        return this;
    },
    * [Symbol.iterator]() {
        for (let task of tasks) {
            yield task;
        }
    }
};

export default movieList;