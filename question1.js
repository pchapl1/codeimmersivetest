// ### Question 1 - String Methods 1

// Write a script that console.logs a given string with all the letters capitalized
let text = 'this is my script'
if (text.match(/[a-z]/i)){
    let res = text.toUpperCase()
    console.log(res)
    return res
}
else {
    console.log('string contains characters that are not all letters')
}