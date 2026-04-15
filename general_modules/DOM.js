/***********************************************************************************************************************
 * Program............: Smartwatch FAQ
 * Programmers........: Ben Stearns and Kaleb Aregay
 * Date...............: 4-14-26
 * GitHub Repo........: https://github.com/bstearns07/MovieTracker
 * Program Summary....: a JavaScript web application for storing/displaying a list of movies
 * File Description...: defines general utility functions used throughout the application
 **********************************************************************************************************************/

/**
 * Retrieves a DOM element using a CSS selector.
 *
 * @param {string} selector - The CSS selector for the element.
 * @returns {Element|null} The first matching DOM element, or null if not found.
 */
function get(selector) {
    return document.querySelector(selector);
}

/**
 * Sets the text content of a DOM element.
 *
 * @param {string} selector - The CSS selector for the element.
 * @param {string} text - The text to display.
 */
function setText(selector, text) {
    get(selector).textContent = text;
}

/**
 * Sets the value property of an input element.
 *
 * @param {string} selector - The CSS selector for the input element.
 * @param {string} value - The value to assign.
 */
function setValue(selector, value) {
    get(selector).value = value;
}

/**
 * Gets the value of an input element.
 *
 * @param {string} selector - The CSS selector for the input element.
 * @returns {string} The current value of the element.
 */
function getValue(selector) {
    return get(selector).value;
}

/**
 * Clears the value or text content of an element.
 *
 * @param {string} selector - The CSS selector for the element.
 */
function clear(selector) {
    const elem = get(selector);
    if (elem.value) elem.value = "";
    else elem.textContent = "";
}

/**
 * Sets focus on a DOM element.
 *
 * @param {string} selector - The CSS selector for the element.
 */
function focus(selector) {
    const elem = get(selector);
    if (elem) elem.focus();
}

/**
 * Highlights the content of an input element.
 *
 * @param {string} selector - The CSS selector for the element.
 */
function select(selector) {
    get(selector).select();
}

/**
 * Runs a function when the DOM content has fully loaded.
 *
 * @param {Function} func - The function to execute after DOM is ready.
 */
function load(func) {
    document.addEventListener("DOMContentLoaded", func);
}

/**
 * Attaches a click event handler to a DOM element.
 *
 * @param {string} selector - The CSS selector for the element.
 * @param {Function} func - The event handler function.
 */
function addClick(selector, func) {
    get(selector).addEventListener("click", func);
}

export {get, setText, setValue, getValue, clear, 
    focus, select, load, addClick};