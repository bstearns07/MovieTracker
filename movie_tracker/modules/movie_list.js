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
    *[Symbol.iterator]() { 
        for (let task of tasks) {
            yield task;
        }
    }
};

export default movieList;