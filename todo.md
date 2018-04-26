* Make Server.config.js work for the isomorphic export
* Make app.js Load a "Example Container"
* Make `./src/app` alias to `~`
* Make server.js sucessfully static render and "send" to browser (Has something to do with cachign and the manifest? accesing stuff in the dist folder?)
* Make client.js sucessfully load in browser - from static html (How do I check to see if this is rendering as it was before or from client?)
* Make images work
* Add Fela (prettySelectorsof undefined, fela-connect not working)
  * Add a Static CSS Reset
  * Add styling to an "Example Container"
* Add React Router
  * Make Two "Example Containers" bound to different routes
* Add Redux
  * "Example Store" with simple increment and decrement / set
  * "Example Container" that "connects" to redux
  * "Example Component" that displays count
  * "Example Component" that is used twice one onClick does incrementing, other does decrementing
* Make client happy with content loaded. "I HAD TO CHANGE SOME CONTENT, IM MAD"

*split containers and pages

*Write tests using enzyme and jest
  *src/test folder
  *actual test live in same folder as file
  *pages & routes
  *index in containers
  *issue with image in test / load image as prop from styles?
    *also use snapshot test (might help)
