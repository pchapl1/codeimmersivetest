// ### Question 9 - Loops 2

// Write a function that takes a number as an input and returns an array containing the multiples of the input number

function multiples(num){
    let arr = []
    for (let i = 1; i < 10; i++){
        let res = num * i
        arr.push(res)
    }
    console.log(arr)
    return arr
}
multiples(9)