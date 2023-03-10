const bcrypt = require('bcrypt');
const saltRounds = 10;
const superSecretPassword = "qwerty"

const hashedPassword1 = bcrypt.hashSync("123", saltRounds)
const hashedPassword2 = bcrypt.hashSync("1234", saltRounds)
const hashedPassword3 = bcrypt.hashSync("12345", saltRounds)
const oldPasswords = [hashedPassword1, hashedPassword2, hashedPassword3];

// console.log("unhashed password", superSecretPassword);
// console.log("hashed password", bcrypt.hashSync(superSecretPassword, saltRounds));
// console.log("Comparing passwords:  ", bcrypt.compareSync("Hello", hashedPassword))

const comparePassword = (password)=>{
    for(let element of oldPasswords){
        if(bcrypt.compareSync(password, element)){
            console.log("You can't use an old password!")
            return
        }
    }
    console.log("You can use this password!")
}
comparePassword("123456")