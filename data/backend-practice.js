//XMLHttpRequest this is a buitin class by js
//message is also know as request 
const xhr=new XMLHttpRequest();
//param-- what type of message,where to send,


xhr.addEventListener('load',()=>{
  console.log(xhr.response);
});
xhr.open('GET','https://supersimplebackend.dev/products/first');

xhr.send();//asynchronous code

//xhr.response//this will take time so adding an event listner for this 

