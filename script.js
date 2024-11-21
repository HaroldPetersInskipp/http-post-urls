// ==UserScript==
// @name         Log URLs
// @namespace    https://github.com/HaroldPetersInskipp/
// @version      0.4.1
// @homepageURL  https://github.com/HaroldPetersInskipp/http-post-urls
// @supportURL   https://github.com/HaroldPetersInskipp/http-post-urls/issues
// @description  POST all URLs visited to a local server, excluding local files
// @author       Inskipp
// @copyright    2024+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/http-post-urls/blob/main/LICENSE
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/http-post-urls/main/icon.png
// ==/UserScript==

// Wrap the entire script in an immediately-invoked function expression (IIFE) for better encapsulation
(function() {
    'use strict';

    // Replace the following placeholder with your actual server information
    let server = "http://IPADDRESS:PORT/ENDPOINT"; // REPLACE THIS WITH YOUR SERVER INFO (example "http://192.168.1.999:1880/firefox")

    // Store the current page URL, history state, and hash for tracking changes
    let address = location.href;
    let previousState = window.history.state;
    let hash = window.location.hash;

    // Function to check if a URL represents a local file
    function isLocalFile(url) {
        // logic to determine whether the URL is a local file
        return !url.startsWith("file://");
    }

    // Function to send the current URL to the server if it's a local file
    function GetURL() {
        if (isLocalFile(address)) {
            // Prepare the request options
            let requestOptions = {
                method: "POST",
                url: `${server}`,
                data: `${address}`,
                headers: {
                    "Content-Type": "application/javascript"
                }
            };

            // Use GM_xmlhttpRequest to send the request
            GM_xmlhttpRequest(requestOptions);

            // Log the success
            console.log(`Successfully logged ${address}`);
        }
    }

    // Initial call to GetURL() when the script is executed
    GetURL();

    // Set up an interval to continuously check for URL and history state changes
    setInterval(function() {
        if (previousState !== window.history.state) {
            // Update history state and address if there's a change
            previousState = window.history.state;
            address = location.href;
            GetURL();
        };
        if (hash !== window.location.hash) {
            // Update hash and address if there's a change
            hash = window.location.hash;
            address = location.href;
            GetURL();
        };
    }, 2000); // Interval set to 2000 milliseconds (2 seconds)

})();
