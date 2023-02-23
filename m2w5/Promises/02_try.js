//Can try and catch an error? Why would we want to do that?

const objectOfErrors = {
  message: "Something broke",
  type: "Small Error"
}
const toaster = function (time) {
  setTimeout(() => {
    try {
      if (Math.random() > 0.0000001) {
        throw new Error("Your toaster broke :(")
      }
      console.log("TOAST IS READY!")
    } catch (error) {
      console.error(error)
    }
  }, time)
}
toaster(2000)
// console.log("Hey, don't forget your keys!");
setTimeout(() => {
  console.log("Hey, don't forget your keys!");
}, 3000);
