//All the promises?
const fs = require("fs");

// const toaster = (timer) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         //Attempt to run this code
//         //Math.random creates a number between 0 - 1
//         //This is just to simulate an error
//         if (Math.random() > 2) {
//           reject("OH NO TOASTER IS BROKEN!"+timer)
//           return
//         }
//         resolve("Hey, your toast is ready!"+timer)
//       }, timer)
//     })
//   }

// Promise.all([toaster(1000),toaster(2000),toaster(3000)]).then((array)=>{
//     console.log(array)
// }).catch((error)=>{console.log(error)})
let number = 0;
const readFilePromise = (path) => {
    return new Promise((resolve, reject)=>{

        fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            reject(err);
        } else {
          //This file number is 10
          resolve(Number(data));
        }
    })
})}
Promise.all([readFilePromise("./data1.txt"),readFilePromise("./data2.txt"),readFilePromise("./data3.txt")])
.then((array)=>{
    array.forEach((element)=>{
        number += element
      })
      console.log(number)
})
.catch()