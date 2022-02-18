# http-post-urls
Userscript to POST all URL's visited to a local server. For use with Tampermonkey.

With Greasemonkey you may need to replace GM_xmlhttpRequest with GM.xmlHttpRequest (untested).

# Important
You must edit the <code>server</code> variable in <code>script.js</code> with your server endpoint.

For example <code>"http://192.168.1.999:1880/firefox"</code>

Installation
------------

First, install a plugin that enables UserScript. There are several plugins for each web browser:

- Chrome or Firefox: [Tampermonkey](https://www.tampermonkey.net/)
- Firefox: [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

Then, [click here to install](https://github.com/HaroldPetersInskipp/http-post-urls/blob/main/script.js).