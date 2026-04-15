/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines the main JavaScript file for running the application
 **********************************************************************************************************************/


import movieList from "movie_list";
import Movie from "movie";
import * as dom from "DOM"

/**
 * Sorts movie data
 * Clears the existing options
 *
 * @function displayMovies
 * @return {void}
 */
const displaymovies = () => {
    movieList.sortMovieData();

    const select = dom.get("#movies");
    select.textContent = "";  // clear previous movies

    for (let movie of movieList) {
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(movie));
        select.appendChild(opt);
    }  
    dom.focus("#movie");
}

/**
 * To set initial focus
 * Adds the event listener for button clicks
 * loads stored movies and displays them
 */
dom.load(() => {

    /** Set initial focus to title input field */
    dom.focus("#title");

    /**
     * Handles adding a new movie to the list
     * validates required fields and rating range
     * Displays invalid error message
     */
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newmovie = new Movie(
            dom.getValue("#title"),
            dom.getValue("#genre"),
            dom.getValue("#rating")
            );
        
        let message = "";
        if (newmovie.title === "") {
            message += "Movie is required.\n";
        }
        if (newmovie.rating === "") {
            message += "Rating is required.\n";
        }
        else if (newmovie.rating < 0 || newmovie.rating > 10) {
            message += "Rating must be between 0 and 10.\n";
        }

        if (message === "") {
            movieList.load().add(newmovie).save();
            dom.clear("#title");
            dom.clear("#rating");
            displaymovies();
        } else {
            dom.setText("#msg", message);
            dom.select("#title");
        }
        dom.focus("#title");
    });

    /**
     * Clears all movies and resets all form fields.
     */
    dom.addClick("#clear_movies", () => {
        movieList.clear();
        dom.clear("#movies");
        dom.clear("#title");
        dom.clear("#rating");
        dom.clear("#msg");
        dom.focus("#title");
    });

    /**
     * Deletes selected movies from the list
     * Displays error message if no movie selected
     */
    dom.addClick("#delete_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const index = dom.get("#movies").selectedIndex;
        if (index === -1) {
            dom.setText("#msg", "Please select a movie to delete.");
        } else {
            movieList.load().delete(index).save();
            displaymovies();
        }
    });

    /** Load stored movies and display them */
    movieList.load()
    displaymovies();
});