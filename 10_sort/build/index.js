"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumberCollection_1.NumbersCollection([40, 4, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(-90);
linkedList.sort();
linkedList.print();
