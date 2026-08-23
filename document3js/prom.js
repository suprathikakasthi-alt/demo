//MODULE-A

// Question 1: 
// SerVer Verification Latency Simulator
// Write a function from scratch named verifyUserCredentials(username, password) that checks login records and returns a Promise object.
// Inside the promise, establish a 1500ms background execution window using setTimeout. 
// If the username matches "admin" and the password matches "secret123", trigger resolve("🔓 Access granted successfully."). 
// For any other inputs, trigger reject("❌ Security violation: Invalid credentials."). Write the consumer block below using .then() and .catch() to handle both flows.
 
// function verifyUserCredentials(username,password){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         if(username==='admin'&&password==="secret123"){
//             resolve("🔓 Access granted successfully.")
//         }else{
//             reject("❌ Security violation: Invalid credentials.")
//         }
//        },1500)
//     })
// } 
// verifyUserCredentials("admin","secret123")
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))


//OUESTION-2
// Create a function from scratch called executeSecureGatewayCall(transactionAmount) returning a Promise. 
// If the amount is greater than 0, resolve the promise with a unique confirmation string: TXN-${Math.floor(Math.random() * 100000)}
// after a 1-second timeout delay. 
// If the amount is less than or equal to 0, immediately reject with "Transaction failed: Null  value detected." without waiting.
//  Consume it and append a .finally() block logging "Gateway connection terminated.".

// function executeSecureGatewayCall(transactionAmount){
//     return new Promise((resolve,reject)=>{
//         if(transactionAmount>0){
//             setTimeout(() => {
//                 resolve(`TXN-${Math.floor(Math.random() * 100000)}`)
//             },1000);
//         }else{
//             reject("Transaction failed: Null  value detected.")
//         }
//     })
// }
// executeSecureGatewayCall(100)
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("Gateway connection terminated."))


//MODULE-B

// Question 3
//  Multi-Stage Document Metadata Pipeline
// Write an operational promise chain using the public API endpoint
// [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1). 
// First, use fetch() to load the raw response and convert it to JSON via response.json(). 
// In the following .then() block, print out the post's title property using a standard template string, and isolate the numerical userId by explicitly
// returning it down the pipeline. In the subsequent .then() block, receive that single userId value and print


//fetch("https://jsonplaceholder.typicode.com/posts/1")

// .then((response) => {
// const data =response.json();
// return data;
// })

// .then((user) =>{
// console.log("Title:", user.title)
// return user.userId;
// })

// .then((id) => {
// console.log("ID: ",id)
// })



// .catch((err) => {
//  console.log("Error", err)
// })


//OUESTION 4
// Construct a multi-stage dependency chain using data relationships.
//  Fetch user information from [https://jsonplaceholder.typicode.com/users/2](https://jsonplaceholder.typicode.com/users/2).
//  Inside the user resolution block, log the account name,
//   then dynamically create and return a brand new fetch() request targeting their respective task sheet via 
//   [https://jsonplaceholder.typicode.com/todos?userId=$](https://jsonplaceholder.typicode.com/todos?userId=$){user.id}
//     . Continue the chain by converting that nested response to JSON,
//     and print the total count of assigned to-do elements found in the resulting array.
// fetch("https://jsonplaceholder.typicode.com/users/2")
// .then((response)=>{
//     return response.json()
// })
// .then((user)=>{
//     console.log(`username: ${user.name}`)

//     return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
// })
// .then((spec)=>{
//     return spec.json()
// })
// .then((data)=>{
//     console.log(data.length)
// })



//MODULE-C

//OUESTION-
// Isolated Dashboard Loader Profile
// Write a clean operational wrapper function called loadUserDashboardProfile() using the async/await structure from scratch.
// Implement secure local error boundaries by wrapping your code completely in a try/catch block. 
// Inside the execution lane, use await fetch() to query [https://jsonplaceholder.typicode.com/users/4](https://jsonplaceholder.typicode.com/users/4),
// convert the body to JSON, and log out the user's name, city location, and company division name cleanly on three separate output lines.

// async function loadUserDashboardProfile(){
//     try{
//         const res=await fetch("https://jsonplaceholder.typicode.com/users/4");
//         const data=await res.json()
//         console.log(data.name)
//     }catch(error){
//         console.log(error)
//     }
// }
// loadUserDashboardProfile()


// Question 6: Complex Task Data Aggregation Engine
// Write an async function from scratch named compileSystemMetrics().
// First, initiate an await fetch() request to [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
// to capture the entire system task manifest. Convert the response payload into a standard JavaScript array object. 
// Using standard array manipulation filters, isolate the tasks that are not complete (completed: false),
//  calculate the array length, and log out: System Health Check -> Incomplete Workload Remaining: ${count} elements..

// async function compileSystemMetrics(){
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//         const count=data.filter((item)=>item.completed===false).length
//         console.log(`System Health Check -> Incomplete Workload Remaining: ${count} elements.`)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }
// compileSystemMetrics()