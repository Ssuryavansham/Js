// conversion in JS how we can convert datatypes to anothet datatypes. 

// convert number to string

let score1 = 33

// now to change the variables dataype number to string using conversion -
let valuInNumber2 = String(score1)

console.log(typeof valuInNumber2)// it will print datatype is string
console.log(valuInNumber2)


// convert string to Number

//but if the score had string datatype and it have mix types of data like 22Abc(string) and we try to convert string to number. 
let score = "33ss" 

let valuInNumber = Number(score)// it will show the number datatypes but as we can in score we have number and alphabtes both then to check what is print value run the below command. 
//now check the score dataypes is chnaged from string to Number
console.log(valuInNumber)// it will give NaN)(not a number) so we cam't convert the string dataypes to number but we can convert the numnber to string. 
console.log(typeof valuInNumber)// it wil show datatype is number

// Convert boolen to Number.

let loggin= 1
let booleanIsLoggin = Boolean(loggin)// converting number to boolean
console.log(booleanIsLoggin)// it will print true because 1 value means true and 0 means false in boolean dataType.
console.log(typeof booleanIsLoggin) // it will show dataType is boolean means we converted the number to boolean dataType. 



