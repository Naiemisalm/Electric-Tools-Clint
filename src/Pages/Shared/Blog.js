import React from 'react';

const Blog = () => {
    return (
        <div>
           <div>
           <h1 className='text-4xl'>How will you improve the performance of a React Application? </h1>
            <p>The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.</p>
           </div>
           <div>
               <h1 className='text-4xl'>How does prototypical inheritance work?</h1>
               <p>JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
           </div>
           <div>
               <h1 className='text-4xl'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
               <p>In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one.</p>
           </div>
           <div>
               <h1 className='text-4xl'>what is a unite test? why shuld write unite test?</h1>
               <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test.</p>
           </div>
           <div>
               <h1 className='text-4xl' >What is a unit test? Why should write unit tests?</h1>
               <p>Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code. After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all of the needed features are available. These unit tests are then grouped together in a test suite for easy access. Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example, is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha. Serial test execution in this framework simplifies asynchronous testing.</p>
           </div>
        </div>
    );
};

export default Blog;