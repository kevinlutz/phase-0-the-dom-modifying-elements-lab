// Write your code here!
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Kevin is the champion!";

/*  
1) index.html
       after index.js is processed
         no longer has DOM node 'main#main':
     AssertionError: Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
      at Context.<anonymous> (test/indexTest.js:4:102)
      at processImmediate (node:internal/timers:464:21)
2) index.html
       after index.js is processed
         has a 'newHeader' variable that points to node 'h1#victory':
     ReferenceError: newHeader is not defined
      at Context.<anonymous> (test/indexTest.js:8:14)
      at processImmediate (node:internal/timers:464:21)

  3) index.html
       after index.js is processed
         has a 'newHeader' variable that points to node 'h1#victory':
     ReferenceError: newHeader is not defined
      at Context.<anonymous> (test/indexTest.js:12:14)
      at processImmediate (node:internal/timers:464:21)

  4) index.html
       after index.js is processed
         has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside:
     ReferenceError: newHeader is not defined
      at Context.<anonymous> (test/indexTest.js:16:14)
      at processImmediate (node:internal/timers:464:21)
  */
