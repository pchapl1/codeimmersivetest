// ### Question 8 - Control Flow

// Write a function that takes an array of numbers as an argument, adds only the even numbers in the array together, and returns the final result

function onlyEvens(arr){
    let total = 0
    for (let num in arr){
        if (arr[num] % 2 === 0){
            total += arr[num]
        }
    }
    console.log(total)
    return total
}
onlyEvens([1,2,3,4])
onlyEvens([1,2,3,4,9,100])
