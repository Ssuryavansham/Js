const accountId= 223344// we can't change the const value if we taken const as a variable.
let accountEmail = "sid@gmail.com"// we can change the let variables value.
var accountPassword = "2244abc" // we can change the var varaible value. 
accountCity = "pune" // we can create variable without to use variable like let and var but this is not a good way to decleare a variable. 
let accountState;  // we can create the variable without to  put value ,in this case JS will take this variable as a undefined(print this u can see the type.). 

//accountId=334422 // we can't chnage the const variables value because we already taken . 
accountEmail="ss@gmail.com"
accountPassword="sid1122"
accountCity="Muzaffarpur"

//console.log(accountEmail,accountId,accountPassword,accountCity);
 //we can print all the variables's data in a tabel form for this we can use .table and pass the variables like below-
 console.table([accountId, accountEmail, accountPassword,accountCity, accountState])

 /* in JS we can create variables using let and var but prefer way is not use the var variable because of issue in block scope and functional scope. */
