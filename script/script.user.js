// ==UserScript==
// @name         http-post-urls
// @namespace    https://github.com/HaroldPetersInskipp/
// @version      0.1
// @homepage     https://github.com/HaroldPetersInskipp/http-post-urls
// @description  POST all URL's visited to a local server
// @author       Inskipp
// @include      *://*
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