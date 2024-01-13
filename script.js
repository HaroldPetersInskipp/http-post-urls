// ==UserScript==
// @name         Log URLs
// @namespace    https://github.com/HaroldPetersInskipp/
// @version      0.4
// @homepageURL  https://github.com/HaroldPetersInskipp/http-post-urls
// @supportURL   https://github.com/HaroldPetersInskipp/http-post-urls/issues
// @description  POST all URLs visited to a local server, excluding local files
// @author       Inskipp
// @copyright    2022+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/http-post-urls/blob/main/LICENSE
// @match        *://*/*
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/http-post-urls/main/icon.png
// @grant        GM_xmlhttpRequest
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

    // Check for URL and history state changes
    window.onpopstate = function () {
        address = location.href;
        GetURL();
    };

    window.onhashchange = function () {
        address = location.href;
        GetURL();
    };

})();
