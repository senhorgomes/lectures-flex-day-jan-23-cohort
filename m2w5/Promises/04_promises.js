//Whats a promise?
//When someone says that they are going to do something at a later stage
//To say and do what you say
//Credit
//Essentially a personal guarantee
//Bryan baked the cookies :) fufilled
//Bryan did not bake the cookies :( rejected

// new Promise((resolve, reject)=>{
//   resolve()
//   reject()
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Attempt to run this code
//     //Math.random creates a number between 0 - 1
//     //This is just to simulate an error
//     if (Math.random() > 1) {
//       reject("OH NO TOASTER IS BROKEN AGAIN!")
//       return
//     }
//     resolve("Hey, your toast is ready!")
//   }, 1000)
// })
// .then((message)=> console.log(message)) //Promise is fufilled
// .catch((error)=> console.log(error)) //Promise is broken






const toaster = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Attempt to run this code
      //Math.random creates a number between 0 - 1
      //This is just to simulate an error
      if (timer === 1000) {
        reject("OH NO TOASTER IS BROKEN!")
        return
      }
      resolve("Hey, your toast is ready!"+timer)
    }, timer)
  })
}
// toaster(1000)
// .then((message)=>{
//   console.log(message)
// //   return toaster(1000)
// // })
// // .then((message)=>{
// //   console.log(message)
// //   return toaster(3000)
// // })
// // .then((message)=>{
// //   console.log(message)
// })
// .catch((error)=>console.log(error))

setTimeout(() => {
  //Attempt to run this code
  //Math.random creates a number between 0 - 1
  //This is just to simulate an error
  throw new Error("Your toaster broke :(")
}, 1000)

setTimeout(()=>{console.log("Did this break?")}, 3000)


//Simple way
