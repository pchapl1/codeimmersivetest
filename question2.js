// ### Question 2 - Array Methods 1

// Write a script that reverses an array and then console.logs the second to last item in the array

let arr = [1,2,4,7]
if (arr.length > 0){
    let reverseArr = arr.reverse()
    console.log(reverseArr[arr.length -2])
}
else{
    console.log('array is empty')
}