// ### Question 4 - Functions 1

// Write a function that multiplies two input numbers together and returns the result

function multiplier(num1, num2){
    if (typeof(num1) != 'number' || typeof(num2) != 'number'){
        console.log('one of the inputs is not a number')
        return
    }
    
    else {
        let ans = num1 * num2
        console.log(ans)
        return ans
    }
}
multiplier(2,5)
multiplier(3,8)
multiplier(90394,5877)
multiplier(90394,'5477')