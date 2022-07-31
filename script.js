// ==UserScript==
// @name         Log URLs
// @namespace    https://github.com/HaroldPetersInskipp/
// @version      0.2
// @homepageURL  https://github.com/HaroldPetersInskipp/http-post-urls
// @supportURL   https://github.com/HaroldPetersInskipp/http-post-urls/issues
// @description  POST all URL's visited to a local server
// @author       Inskipp
// @copyright    2022+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/http-post-urls/blob/main/LICENSE
// @match        *://*/*
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/http-post-urls/main/icon.png
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    let server = "http://IPADDRESS:PORT/ENDPOINT"; // REPLACE THIS WITH YOUR SERVER INFO (example "http://192.168.1.999:1880/firefox")
    let address = location.href;
    let previousState = window.history.state;
    let hash = window.location.hash;

    function GetURL() {
        let requestOptions = {
            method: "POST",
            url: `${server}`,
            data: `${address}`,
            headers: {
                "Content-Type": "application/javascript"
            }
        };
        GM_xmlhttpRequest(requestOptions);
        console.log(`Successfully logged ${address}`);
    };

    GetURL();

    setInterval(function() {
        if (previousState !== window.history.state) {
            previousState = window.history.state;
            address = location.href;
            GetURL();
        };
        if (hash !== window.location.hash) {
            hash = window.location.hash;
            address = location.href;
            GetURL();
        };
    }, 2000);

})();
