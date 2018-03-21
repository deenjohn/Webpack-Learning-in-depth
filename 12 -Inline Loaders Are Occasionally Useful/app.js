//import "babel-polyfill";
import "../tee-loader!./klondike/scoring.js";
// import "./klondike/klondike.js";
// import "./klondike/board.js";
// import "./klondike/game.js";

Promise.resolve(1)

angular.module("solitaire", ["klondike", "ngDraggable"]);
