 //Dates

 let myDate = new Date()
//  console.log(myDate.toString()); //Mon Jun 17 2024 07:34:35 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString()); //Mon Jun 17 2024
//  console.log(myDate.toISOString()); ///2024-06-17T07:29:25.503Z
//  console.log(myDate.toJSON()); //2024-06-17T07:31:12.226Z
//  console.log(myDate.toLocaleDateString()); // 6/17/2024
//  console.log(myDate.toLocaleString()); // 6/17/2024, 7:33:25 AM
//  console.log(myDate.toLocaleTimeString()); // 7:33:25 AM
//  console.log(myDate.toTimeString()); //07:34:35 GMT+0000 (Coordinated Universal Time)
//  console.log(typeof myDate); //object

 let myCreatedDate = new Date("01-14-2024")
 //console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
 //months start from 0(jan)

 let myTimeStamp = Date.now()

//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `day is $(newDate.getDay())} and the time is `

