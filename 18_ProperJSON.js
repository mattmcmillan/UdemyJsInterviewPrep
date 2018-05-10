// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

//before
// const myJsonObj = {
//   myString: [some string],
//   myNumber: [some number],
//   myNull: [null],
//   myBoolean: [false],
//   myUndefined: [undefined],
//   myArray: [some array],
//   myFunction: [some function],
//   myObject: [some object]
// };

//after
const myJsonObj = {
  //must be double quotes
  "myString": "hello",
  "myNumber": 5654.321,
  "myBoolean": false,
  "myNull": null,
  //querying for a missing property in JSON will already return undefined
  //myUndefined: [undefined],
  "myArray": [20, 30, "indigo"],
  //myFunction: [some function],
  "myObject": {
    "name": "Pringus",
    "age": 30
  }
};
