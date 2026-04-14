/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines general functions for retrieving, storing, & removing JSON strings to/from web storage
 **********************************************************************************************************************/

/**
 * Retrieves and parses data from localStorage by key.
 *
 * @param {string} key - The key used to store the data.
 * @returns {any|null} The parsed JavaScript object if found, otherwise null.
 */
function retrieve(key) {
    const json = localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    } else {
        return null;
    }
}

/**
 * Stores data in localStorage after converting it to JSON.
 *
 * @param {string} key - The key under which the data will be stored.
 * @param {any} data - The data to store (will be stringified).
 */
function store(key, data) { 
    localStorage.setItem(key, JSON.stringify(data)); 
}

/**
 * Removes data from localStorage by key.
 *
 * @param {string} key - The key of the item to remove.
 */
function remove(key) { 
    localStorage.removeItem(key); 
}

export {retrieve, store, remove}