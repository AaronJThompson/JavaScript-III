/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding. This is when 'this' is binded the the object that the function is being called from.

* 2. Global object binding. This is when the function is called independantly of any object and called globally. 
    'this' will refer to a global object. In browsers this is the 'window' object. If 'use strict' is applied,
    The global object will be undefined and therefore so will 'this'.

* 3. New binding. When a constructor function is used with the 'new' keyword, 'this' will be provided to the function as an empty object of type defined
    by the constructor.


* 4. Explicit binding. This is when a function is called using an invoker than can bind the 'this' object to that call. For instance the Function.prototype.call method.
    it can also be binded to the function across calls, using the Function.prototype.bind method.

*
* write out a code example of each explanation above
*/

// Principle 1
    object.method = function(arg){
        this.var = arg;
    }
    object.method(someData); // where this = object.

// Principle 2
    function func(arg){
        this.var = arg;
    }
    func(someData); // where this refers to the global object.

// Principle 3
    function Constructor(arg){
        this.var = arg;
    }
    let newObject = new Constructor(someData); // where this refers to an empty object of type Constructor


// Principle 4
    function func(arg){
        this.var = arg;
    }
    func.call(someObject, someData); // where this refers to someObject
