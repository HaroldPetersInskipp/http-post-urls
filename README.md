# http-post-urls
Userscript to POST all URL's visited to a local server. For use with Tampermonkey and a local [Node-RED](https://nodered.org/docs/getting-started/) server.

# Important
You must edit the <code>server</code> variable in <code>script.js</code> with your server endpoint.

For example <code>"http://192.168.1.999:1880/firefox"</code>

The <code>flow.json</code> file can be imported into the Node-RED editor for a basic example of server endpoint usage that logs the visited URL's to a file.

With Greasemonkey you may need to replace "GM_xmlhttpRequest" with "GM.xmlHttpRequest" in <code>script.js</code> (untested).

Installation
------------

First, install a plugin that enables UserScript. There are several plugins for each web browser:

- Chrome or Firefox: [Tampermonkey](https://www.tampermonkey.net/)
- Firefox: [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

Then, [click here to install](https://gist.github.com/HaroldPetersInskipp/7476f0d7c9512b80b90211c0b5b90663/raw/http-post-urls.user.js).
