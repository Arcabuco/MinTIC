console.log("Holiwi")

//var a = 10
//a = a + 1
//console.log("a >", a)

//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//arr.map(item => console.log(item))

const fetch = require("node-fetch")
var response = fetch("https://api.github.com/users/amontealegrer")
    .then(response => response.json())
    .then(response => console.log(response))


