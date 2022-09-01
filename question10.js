// ### Question 10 - Recursion

// Write a recursive function that subtracts 1 from an input number until the input number is less than or equal to 5

function subtract1(num){
    if (num <= 5){
        console.log(num)
        return
    }
    else {
        num = num - 1
        return subtract1(num)
    }
}

subtract1(10)
subtract1(5)
subtract1(3)