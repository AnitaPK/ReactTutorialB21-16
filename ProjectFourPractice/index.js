// function sayLouder(text){
//     return text.toUpperCase();
// }

// console.log(sayLouder('It works'));
// console.log(sayLouder('How are you?'));


// function getPositiveNumbers(array){
//     return array.filter((arrayElement)=> {
//                         arrayElement  >  0
//                        });
// }

// console.log(getPositiveNumbers([10, -5, 2, -4]));

// function getPassingTests(array){
//        return array.filter(elmn => elmn.grade  >= 10)

// }

// const data = [{id: 1,grade: 10}, {id: 2,grade: 4}, {id: 3,   grade: 18}]
// console.log(getPassingTests(data));



import React from 'react';
import {createRoot} from 'react-dom/client';

// React = require('react');
// createRoot = require('react-dom/client');

// console.log(React.version);

// //18.2.0


// function getReactVersion(){
//     return React.version;
// }
// console.log(getReactVersion());

// // const element = React.createElement('h1',{className:'newClass'},'this is h1 tag');

// function createDivElement() {
//     return React.createElement('div',{className:'newClass'},'Hello World');
// }


// // sample usage (do not modify)
// console.log(createDivElement());


const root = document.getElementById('rootDiv');


createRoot(root).render(React.createElement('h1',{},'Hello World'));


 function getLoginStatus (){
    if(loggedIn){
        <p>You are logged in</p>
    }else{
        <a href='/login' >Login</a>
    }
 }
 getLoginStatus();


 function getNavbar (user){
    return <div>Logged in as {user}. Log out</div>
 }
 getNavbar('John');
 
