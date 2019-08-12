'use strict';

// YOU KNOW WHAT TO DO //

/**
 
 * Each: This function first checks if the collection parameter is an array or object, then loops through each item in the
 * array or object and applies the 'action' function which is a function that you provide to each element in the collection. Used to quickly check
 * if a given collection is an array or object.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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


/**         
 * * (INDENTITY) : This function takes a value and returns that value. Not a very useful function. But returns a value nonetheless.
 * *
 * *
 * *
 *  @param: Literally any value.
 * 
 *
 * *
 * */
 function identity(value){
    return value;
}

module.exports.identity = identity;




/**
 * (TYPEOF) 
 * This function takes any datatype value and returns the typeof value as a string. Useful for finding out what datatype 
 * the provided value is. But thats about it.
 * 
 *  EX: typeOf("Hi") // Output: "string"
 *  typeOf(2) // Output: "number"
 *
 * param(literally any value in javascript)                                           
 
 * *
 * */
 
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
};

module.exports.typeOf = typeOf;




/** (FIRST) 
 * 
 * 
 * This function takes the number provided and returns the number of items that are first in an array.
 * First it checks if it is an array and if it is just returns the value of that array sliced at 0 and stopping at the given number.
 * If it doesnt have an array provided then returns just a blank array, if no number is provided then it returns just the first ele in the array.
 * var array = [1,2,3,4]
 * EX: first(array, 2) Output : [1,2]
 * 
 * 
 * param1: array or object (a collection)
 * param2: a number of any value.
 * 
 * 
 * 
 * */ 
 
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
 * (LAST)
 * 
 * If array is not given it returns a blank array. []
 * If number is not given it returns the last element in <array>
 * 
 * This function is almost exactly similar to first except it starts at the end of the array instead. So instead of giving you the first items, this function gives you the values of the last items
 * in an array sliced. 
 *
 * param1: array or object (a collection).
 * param2: a number of any value.
 * */
 function last(array, number){
    console.log(array, 'jjjj');
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
    
    
};
module.exports.last = last;

    
/**
 * (INDEXOF) 
 * 
 * 
 * This function takes a value and returns whatever value is in the index that matches the given value. Simeple as that,
 * It doesn't check if its an array because it only excepts arrays. If the value doesnt match any index in the array or an array is not given it returns -1 instead.
 * 
 * var array = [1,2,3,4];
 * indexOf(array, 2)  // Output: 3;
 * 
 * 
 * 
 * param1: an Array.
 * param2: a value;
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
 * (CONTAINS) 
 * 
 * This function only takes an array and value and and tests if that value matches anything in that array, if it does it returns true.
 * Uses a ternary statement to determine the outcome of the boolean value. If the array doesn't contain anything that matches the given value, it returns false.
 * 
 * Basically a big boolean function that tests if something is inside of something else. Only takes arrays.
 *
 * param1; array
 * param2: a value.
 */
 
 function contains(value, array){
    // console.log(array, value, "fsegdgnf");
   
        
    return (value.indexOf(array) === -1) ? false : true;
            

    
    // return result;
};

module.exports.contains = contains;


/**
 * (UNIQUE)
 * 
 * 
 *  This function takes an array with duplicates and removes all the duplicates and returns a nice new array with all of them removed.
 * It only gives us the UNIQUE values!
 * 
 * var arr = [1,2,3,2,4,5,2,5,3]
 * unique(arr); //output: [1,2,3,4,5];
 * 
 * param1: an array
 *
 * gets rid of duplicates.
 */
 function unique(array){
       var result = [];
        for (let i = 0; i < array.length; i++){
            if(result.indexOf(array[i]) === -1){
               result.push(array[i]);
            }
        }
    
 
        return result;
};
module.exports.unique = unique;


/**
 * (FILTER)
 * 
 * 
 * Boy howdy is filter useful. filter loops through each element in the array and applies the action (anon) function to each value.
 * Essentialy you could use filter to find and coordinate what you want out of an array. If you just want the even numbers you can do that, if you just want words longer than 6
 * you can do that too. The possibilites are endless. It returns a new array, the provided array remains unchanged.
 * 
 * param1: an array
 * param2: a function
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
    
};
module.exports.filter = filter;

/**
 * (REJECT) 
 * 
 * Returns a new array of elemts for which calling function returned false.
 * 
 * Reject is a lot like filter, in fact it uses the filter function in it! Except this one uses the action (anon) function to reject values.
 * This function returns a new array of elements for which the action function returned false. So if its not true then put it in this array and return that.
 * 
 * The opposite of the filter function.
 * 
 * param1: an array
 * param2: a function.
 *
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
 * (PARTITION)
 * 
 * Partition gives us two arrays. Wow. With this function we can 'partition' our bigass array until values that return true with the action function and values that return false.
 * 
 * Returns an array that is made up of 2 sub arrays:
 * 0 index contains an array for all the values which <function> returned true.
 * 1 index contains an array for all the values which <function> returned false.
 * 
 * Essentially this function combines the previous two of filter and reject into one function, Useful for big arrays or obtaining truthyness values.
 * 
 * param1: an array
 * param2: function
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
 * (MAP) function map: 
 * 
 * 
 * 
 * MAP is another one of the extra useful funcitons, because it is essentially the same as filter in that it loops over the collection and applies the function to each element, except map
 * MODIFIES the values using its action (anon) function. Returning a whole new array with the modified values. Useful for changing large sets of data in one go. One easy way to remember
 * is that Filter and find both begin with F, while Map and modify both begin with M. This particular map is also a little different because it works on objects too unlike the native .map
 * Which only works on arrays.
 * 
 * 
 * 
 * _.map
 * 
 * returns a new array of values.
 * 
 * param1: a collection (object or array)
 * param2: a funciton.
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


/**
 * (PLUCK) 
 * 
 * My favorite out of all these functions mostly because I just love saying pluck. Pluck takes an array of objects and the property you want to find and "plucks" it out into a new array.
 * It basically loops through the array and finds the exact value you specified in property and if it exists in the array of objects, it finds it and gives it to you. For example if you had a list of movies and only wanted the ratings.
 * Pluck would be useful for provided you with an array of this the ratings for each movie.
 * 
 *  pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 * 
 * param1: array of objects
 * param2: a property value.
 *
 */
 function pluck(array, property){
     
    return  map(array, function(ele, index, array){
             
             return ele[property];
     });
}
module.exports.pluck = pluck;



/**
 * (EVERY) 
 * 
 * 
 * This function tests a collection and uses the action (anon) function to test if every element returns true, if all of them return true then you get a boolean value of true!
 * If just one of them returns false, then you get a boolean value of false. True to the functions name, EVERY element has to be true in order for it to be true, aint no half stepping with Every.
 * if a function is not provided returns true if every element in the collection is truthy. Otherwise returns false. Will only ever return a boolean value of true or false. Useful for checking arrays that have truthy values.
 * 
 * 
 * param1: a collection(object or array)
 * param2: function.
 *
 */
function every(collection, action){
    let truthy = true; // our output variable
    
    if (action !== undefined){ //if action function is not equal to undefined. so if action function is given then run the each function
    // which takes the collection and the an anonymous function with the arguments of element, index, and collection which tests if the action function
    // returns false.
        
      each(collection, function(el, index, collection){
          if (action(el, index, collection) === false){
               truthy = false;
          } 
    })
    
                
    // else we test is the element el is given 
    } else {
        each(collection, function(el){
            if (el === false){
                truthy = false;
            }
        });
    }
    // return the output boolean value or truthy depending on what is given.
    
    return truthy;
    
}

module.exports.every = every;





/**
 * (SOME) function some: tests if all elements of calling action is all false, if so return false.
 * if any of elements are true, returns true.
 * 
 * If funciton is not provided returns true if one element is truthy, else returns false.
 * 
 * JUST LIKE EVERY BUT THE OPPOSITE. This badboy tests if all the elements return false with the action (anon) function, if just one of them are true it returns false.
 * So on some weird logic, if they are all false within the callback function then the some function returns true. If just one of the elements in the callback function return true then the some function returns false.
 * Also returns only booleans values and nothing else. What a time to be alive.
 * 
 * param1: collection (obj or array)
 * param2: action ( a anon function)
 *
 */
function some(collection, action){
    
    let truthy = false; // output variable
    
    // test if all elements of calling action is all false, if so return false.
    // if any of the elements are true then return true.
    // if function is not provided, return true if one element is truthy, otherwise return false.
    // opposite of last function.
    
    if (action !== undefined){ //if action function is not equal to undefined. so if action function is given then run the each function
    // which takes the collection and the an anonymous function with the arguments of element, index, and collection which tests if the action function
    // returns false.
        
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
 * (REDUCE) 
 * 
 * 
 * Oh boy what can I say about Reduce. This workhorse of a function is useful for just about anything you want to do in Javascript. Long story short it returns a single value which is the seed that you provide it.
 * Say you had an array of numbers and wanted to find the sum of all numbers in there, then reduce is your function, Reduce loops over the array and adds each number to an accumulator which can equal your seed, later it returns the seed
 * with all values added to it. Think of the seed as your starting place
 *
 * On the very first iteration we can use <seed> as the "previous result".
 * Uses the return value of <function> as the "previous result" on the next iteration.
 * Reduce is the best yaya!
 * 
 * 
 */
 
function reduce(array, action, seed){
    
// I - an array, function, and seed
// O - return the return value of the final action call.
// C - 
// E - what is seed is not given.
    
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
 * (EXTEND) 
 * 
 * This function takes an object and a spread amount of objects and passes the properties to the first provided object. It's like reduce but for objects.
 * 
 * With this function you are extending one object by adding other objects into it. Much like reduce you are still accumulating on one item and returning that item.
 *
 *  var data = {a:"one"};
 *   extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *  extend(data, {a:"two"}); -> data now equals {a:"two"}
 * 
 * param1: object.
 * param2: any amount of objects after that.
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
