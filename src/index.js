/**
 * * Since otherFile is in the same folder as index.js we use ./ to show it is from the same folder
 * * Import using {} is called destructuring. We are pulling bestChees and worstCheese from objects being exported from otherFiles.js
 * */

 import { bestCheese, worstCheese } from './otherFile.js'

 console.log("borkings to all and to all a good bork!");
 // * In the line below we are using a template literal to use best and worst cheese in our string
 let titleFun = `${bestCheese} and ${worstCheese} are two different cheeses of interesting origin!.`;
 // * Here we are console logging our string from above!
 console.log(titleFun);
 // * In this line we are using querySelector to grab the h1 tag from our DOM
 // * DOM stands for document object model. The DOM is how javascript interprets html
 let theTitler = document.querySelector("h1");
 // * In the line below we are changing the text of our title to our string called titleFun
 theTitler.innerText = titleFun;