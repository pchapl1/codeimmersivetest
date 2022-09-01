// ### Question 6 - String Methods 2

// Write a function called despacer that replaces all whitespace from an input string with $'s

function despacer(text){
    let ans = text.replace(' ', '$')
    console.log(ans)
    return ans
    }

despacer(' ')
despacer('hello timmy')

