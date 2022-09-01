// ### Question 5 - Loops

// Write a function that generates an object containing the counts for each letter in a string as key/value pairs

function charCounter(myStr){
    let obj ={};
    for(let char of myStr){
        if(!obj[char]){
            obj[char] = 1;
        }
        else 
        {
            obj[char] = obj[char]  + 1
        }
    }
    console.log(obj)
    return obj
}
charCounter('lllasdf')
charCounter('123lakjfd lkda')