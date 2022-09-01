// ### Question 3 - Object Methods 1

// Write a script that checks for a given object key and then console.logs the value of the object key
let testObject = {'key1': 1, 'key2': 'look', 'key3': 3}
let target = 'key1'
if (testObject.hasOwnProperty(target)){
    console.log(target)
}
else {
    console.log('the key you are looking for is not in the object')
}