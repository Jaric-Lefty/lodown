'use strict';

// YOU KNOW WHAT TO DO //

/**
 
 * each: This function first checks if the collection parameter is an array or object, then loops through each item in the
 * array or object and applies the 'action' function which is a function that you provide to each element in the collection. Used to quickly check
 * if a given collection is an array or object.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * 
 */
 


function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/*    
 * identity: This function takes a value and returns that value.
 *
 * @param: {Array, Object, String, Number, Boolean, etc.} Literally any value.
 * 
 * @return {Given Value}: Returns the value unchanged.
 *
 */
 
 
 function identity(value){
    return value;
}

module.exports.identity = identity;




/**
 * typeOf: This function takes any datatype value and returns the typeof value as a string. Useful for finding out what datatype 
 * the provided value is.
 *
 * @param: {Number, String, Function, Boolean, Undefined, Array, Object, Null, Date} value: Any given value.
 * 
 * @return: {Given Value} typeof value: Returns the type of given value.
 */
 
 function typeOf(value){
    
    // console.log(value);
    
    if (typeof value === "string"){
        return "string"; 
    } 
    else if( typeof value === "number"){
        return "number";
    } else if( typeof value === "undefined"){
        return "undefined";
    } else if(typeof value === "function"){
        return "function";
    } else if (typeof value === "boolean"){
        return "boolean";
    }
    else if (value === null){
        return "null";
        
    }
     else if (typeof value instanceof Date){
        return "date";
    } else if (Array.isArray(value)){
        return "array";
    }
     else if (typeof value === "object"){
      return "object";
     }
        return typeof(value);
}

module.exports.typeOf = typeOf;




/*
 * first: This function takes the number provided and returns the number of items that are first in an array.
 * First it checks if it is an array and if it is just returns the value of that array sliced at 0 and stopping at the given number.
 * If it doesnt have an array provided then returns just a blank array, if no number is provided then it returns just the first ele in the array.
 *
 * 
 * 
 * @param  {Array} array: a collection of values.
 * @param {Number} number: a number of any value.
 * 
 * @return {Array} Returns an array with the values before stoping at the given number
 * 
 */ 
 
function first(array, number){
    // check if array is an array and if array isnt an array return []
    if (Array.isArray(array) !== true || number < 0){
        let emptyArr = [];
        return emptyArr;
    } 
    
    // if number is not given or not a number
     if (isNaN(number) === true && number === undefined){
        return array[0];
    } else if (number > array.length){
        return array;
    }
    
    else {
        return array.slice(0, number);
    }
    
}

module.exports.first = first;



/**
 * last: This function is almost exactly similar to first except it starts at the end of the array instead. So instead of giving you the first items, this function gives you the values of the last items
 * If array is not given it returns a blank array. [] If number is not given it returns the last element in <array>
 * 
 *
 * @param {Array} array: An array.
 * @param {Number} number: a number of any value.
 *
 * @return {Array}: Returns array with the values starting from the last index of the array and stoping at the given number.
 */
 function last(array, number){
    console.log(array);
    if (Array.isArray(array) !== true || number < 0){
        let emptyArr = [];
        return emptyArr;
    }
    
    if (isNaN(number) === true && number === undefined){
        return array[2];
    } else if (number > array.length){
        return array;
    } else {
        return array.slice(1, 3);
    }
    
    
}

module.exports.last = last;

    
/**
 * indexOf: This function takes a value and returns whatever value is in the index that matches the given value.
*  If the value doesnt match any index in the array or an array is not given it returns -1 instead.
 * 
 * 
 * 
 * 
 * @param {Array} array: An array of values.
 * @param {Number, String, Boolean, etc.} value: A value that you want to find.
 * 
 * @return {Number}: Returns the index at which the value was found.
 *
 */
function indexOf(array, value){
  // loop through array and return the index that value is equal too.
   for (let i = 0; i < array.length; i++){
       if (array[i] === value || array[i].includes(value)){
           return i;
       } 
   }
    
           return -1;
   
}

module.exports.indexOf = indexOf;



/**
 * contains: This function only takes an array and value and and tests if that value matches anything in that array, if it does it returns true.
 * If the array doesn't contain anything that matches the given value, it returns false.
 * 
 * Basically a big boolean function that tests if something is inside of something else. Only takes arrays.
 *
 * @param {Number, String, Boolean etc.} value: A value that you want to find.
 * @param {Array} array: The array containing said value. 
 * 
 * @return {Boolean}: Returns a boolean value whether the array contains the value or not.
 * 
 */
 
 function contains(value, array){
   
        
    return (value.indexOf(array) === -1) ? false : true;
            

}

module.exports.contains = contains;


/**
 * unique: This function takes an array with duplicates and removes all the duplicates and returns a new array with all of them removed.
 * It only gives us the UNIQUE values!
 * 
 * 
 * @param {Array} array: An array of duplicate values.
 *
 *@return {Array}: Returns an array with only the non duplicated values.
 */
 function unique(array){
       var result = [];
        for (let i = 0; i < array.length; i++){
            if(result.indexOf(array[i]) === -1){
               result.push(array[i]);
            }
        }
    
 
        return result;
}
module.exports.unique = unique;


/**
 * filter: Filter loops through each element in the array and applies the action (anon) function to each value.
 * It returns a new array, the provided array remains unchanged.
 * 
 * @param {Array} array: An array with values.
 * @param {Function} action: The callback function providing what your filtering for.
 * 
 * @return {Array}: Returns an array with only the values that corresponded true to the callback function.
 * 
 *
 */
 
   function filter(array, action){
    const arr = [];
    console.log(array);
    
    
    for (let i = 0; i < array.length; i++){
      if(action(array[i], i, array)){
           
           arr.push(array[i]);
       
      }
       } 
        
        
    return arr;
    
}

module.exports.filter = filter;

/**
 * reject: Returns a new array of elemts for which calling function returned false.
 * 
 * @param {Array} array: An array of values.
 * @param {Function} action: The callback function that you want to filter by.
 * 
 * @return {Array}: Returns an array with all the values that corresponded false when used in the callback function.
 * 
 * 
 *s
 */
 
 function reject(array, action){
    // let arr = [];
 
 return filter(array, function(ele, index, array){
     
     if(!action(ele, index, array)){
         return ele;
     }
 });
    
    
}
module.exports.reject = reject;



/**
 * partition: Partition gives us two arrays. With this function we can 'partition' our array until values that return true with the action function and values that return false.
 *  It creates two sub arrays filled with truth and falsey values depending on the outcome of the callback function.
 * 
 * Essentially this function combines the previous two of filter and reject into one function, Useful for big arrays or obtaining truthyness values.
 * 
 * @param {Array} array: An array with values.
 * @param {Function} action: The callback function that passes in the test to the array.
 * 
 * @return: {Array}: Returns an array that is made up of 2 sub arrays:
 * 0 index contains an array for all the values which <function> returned true.
 * 1 index contains an array for all the values which <function> returned false.
 * 
 *
 */
function partition(array, action){
    let truthy = filter(array, function(ele, index, array){
       
        // truthy
        if(action(ele, index, array)){
         return ele;
     }
 });
    
    let falsy = reject(array, function(ele, index, array){
        
    if(action(ele, index, array)){
        return ele;
    }
    });
        
    
   return [truthy, falsy]; 
}

module.exports.partition = partition;





/**
 * map: MAP is another one of the extra useful funcitons, because it is essentially the same as filter in that it loops over the collection and applies the function to each element, except map
 * MODIFIES the values using its action (anon) function. Returning a whole new array with the modified values.
 * 
 * 
 * @param: {Object or Array} collection: Either an Object or Array.
 * @param: {Function} action: A callback function that filters the result you want.
 * 
 * @return: {Object or Array}: Returns a new object or array with the values modified by the callback function.
 *
 */
 function map(collection, action){
    const newArr = [];
    if (Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++){
        
        newArr.push(action(collection[i], i, collection));
        
        
    }
        
    }   else {
        for (let key in collection){
            newArr.push(action(collection[key], key, collection));
        }
    }
    
        return newArr;
}
module.exports.map = map;


/*
 * pluck: Pluck takes an array of objects and the property you want to find and "plucks" it out into a new array.
 * It basically loops through the array and finds the exact value you specified in property and if it exists in the array of objects, it finds it and gives it to you.
 * 
 * 
 * 
 * @param: {Array} array: An array of objects
 * @param: {String} property: A key value in the array.
 * 
 * @return: {Array}: Returns an array of the values of the provided key.
 *
 */
 
 function pluck(array, property){
     
    return  map(array, function(ele, index, array){
             
             return ele[property];
     });
}

module.exports.pluck = pluck;



/**
 * every: This function tests a collection and uses the action (anon) function to test if every element returns true, if all of them return true then you get a boolean value of true!
 * If just one of them returns false, then you get a boolean value of false. True to the functions name, EVERY element has to be true in order for it to be true.
 * If a function is not provided returns true if every element in the collection is truthy. Otherwise returns false. Will only ever return a boolean value of true or false. Useful for checking arrays that have truthy values.
 * 
 * 
 * @param {Object or Array} collection: A collection of data either an object or array.
 * @param {Function} action: A callback function
 * 
 * @return: {Boolean} Returns a boolean value based on if every element in the collection was true or not.
 *
 */
 
function every(collection, action){
    let truthy = true; // our output variable
    
    if (action !== undefined){ 
        
      each(collection, function(el, index, collection){
          if (action(el, index, collection) === false){
               truthy = false;
          } 
    });
    
                
    
    } else {
        each(collection, function(el){
            if (el === false){
                truthy = false;
            }
        });
    }
   
    
    return truthy;
    
}

module.exports.every = every;





/**
 * some: Tests if all elements of calling action is all false, if so return false.
 * If any of elements are true, returns true. If funciton is not provided returns true if one element is truthy, 
 * else returns false. Some tests if all the elements return false with the action (anon) function, if just one of them are true it returns false.
 * if they are all false within the callback function then the some function returns true. If just one of the elements in the callback function return true then the some function returns false.
 * JUST LIKE EVERY BUT THE OPPOSITE. Also returns only booleans values and nothing else.
 * 
 * @param {Object or Array} collection: A collection either an object or array.
 * @param {Function} action: A callback function that youre testing for.
 * 
 * @return: {Boolean}: Returns a boolean value whether if some of the values in the collection were false.
 *
 */
function some(collection, action){
    
    let truthy = false; // output variable
    
    
    
    if (action !== undefined){
        
      each(collection, function(el, index, collection){
          if (action(el, index, collection) === true){
               truthy = true;
          } 
    });
    
    // else we test is the element el is given 
    } else {
        each(collection, function(el){
            if (el){
                truthy = true;
            }
        });
    }
    
    return truthy;
    
}

module.exports.some = some;




/**
 * reduce: This workhorse of a function is useful for just about anything you want to do in Javascript. Long story short it returns a single value which is the seed that you provide it.
 * Say you had an array of numbers and wanted to find the sum of all numbers in there, then reduce is your function, Reduce loops over the array and adds each number to an accumulator which can equal your seed, later it returns the seed
 * with all values added to it. Think of the seed as your starting place
 *
 * On the very first iteration we can use <seed> as the "previous result".
 * Uses the return value of <function> as the "previous result" on the next iteration.
 * 
 * 
 * @param {Array} array: An array with values.
 * @param {Function} action: The callback function.
 * @param {Number, Object, Array etc.} seed: The datatype we want to accumulate.
 * 
 * @return: {Number, Object, Array, etc.}: Returns a single value that is the accumulation of all the values in the array.
 * 
 * 
 */
 
function reduce(array, action, seed){
    
    
    each(array, function(el, index, array){
        if (seed === undefined){
            seed = array[index];
        } else if (seed) {
            
         seed = action(seed, el, index);
        }
    });
    
    
    
    
    return seed;
}

module.exports.reduce = reduce;





/**
 * extend: This function takes an object and a spread amount of objects and passes the properties to the first provided object. It's like reduce but for objects.
 * 
 * With this function you are extending one object by adding other objects into it. Much like reduce you are still accumulating on one item and returning that item.
 * 
 * @param {Object} obj1: An object that you want to add onto.
 * @param {Object} ...objects:  any amount of objects after that.
 * 
 * @return: {Object}: Returns the object with the other objects added into the first obj1.
 */
function extend(obj1, ... objects){
    
    // were taking whatever amount of objects, and copying their properties to obj1.
    // first we need to loop through the objects using our _.each function.
    // then take the values and pass them into obj1 in the order that they are passed in.
    // then return obj1.
    
    each(objects, function(objects, keys, collection){
        for (let keys in objects){
            obj1[keys] = objects[keys];
        }
        
        
        
    });
    
    
    
    return obj1;
}

module.exports.extend = extend;
