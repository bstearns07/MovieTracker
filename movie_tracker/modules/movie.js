/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines a class defining a Movie object
 **********************************************************************************************************************/

class Movie {

    constructor(description, dueDate) {
        this.description = description;
        this.dueDate = new Date(dueDate);
    }

    get hasInvalidDueDate() {
        return this.dueDate.toString() === "Invalid Date";
    }

    get isPastDue() {
        const today = new Date();
        return this.dueDate.getTime() < today.getTime();
    }

    toString() {
        return `${this.dueDate.toDateString()} - ${this.description}`;
    }
}

// exports the Movie class as a module by default under the name Movie with no curly braces needed
export default Movie;