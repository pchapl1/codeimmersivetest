// ### Question 7 - Array Methods 2

// Write a function that converts a string of numbers and letters into an array of just the numbers

function newArray(text){
    let result = []
    for (let char in text){

        if (!isNaN(text[char])){
            result.push(text[char])
        }
    }
    console.log(result)
    return result
}

newArray('12abc4')