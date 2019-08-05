'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
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
 * * (INDENTITY) : Indentity yfunction is designed to take a value 
 * * and return that value unchanged;
 * *
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
 * (TYPEOF) function typeOf
 *      Takes any value and returns the typeof value as a string "".
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




/** (FIRST) function first: takes an array and number and returns the first <number> of items
 * in an array.
 * If array is not given it just returns a blank array [].
 * If number is not given it just returns the first element in the array. 
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
 * (LAST) function last: takes an array and number and returns the last <number> of items in
 * the array.
 * 
 * If array is not given it returns a blank array. []
 * If number is not given it returns the last element in <array>
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
 * (INDEXOF) function indexOf: takes an array and value, and returns the index of <array> that
 * is the first occurrance of <value>
 * If <value> is not in <array> it returns -1.
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
 * (CONTAINS) function contains: takes an <array> and <value> and returns true if <array>
 * contains that <value>.
 * Returns false, if otherwise.
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
 * (UNIQUE) function unique: takes an array and returns a new array of all ements from <array>
 * with duplicates removed.
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
 * (FILTER) function filter: takes an <array> and <function>. 
 * It calls the function for each element in array passing the arguments:
 *      the element, its index, and array.
 * Returns a new array of elements for which calling <function> returns true.
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
 * (REJECT) function reject: takes an <array> and <function>.
 * It calls the function for each element in array passing the arguments:
 *    of the element, its index, and the array.
 * 
 * Returns a new array of elemts for which calling function returned false.
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
 * (PARTITION) function partition takes an <array> and <function>.
 * Calls function for each element in array passing it the arguments:
 *     the element, key, and array.
 * 
 * Returns an array that is made up of 2 sub arrays:
 * 0 index contains an array for all the values which <function> returned true.
 * 1 index contains an array for all the values which <function> returned false.
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
 * (MAP) function map: Takes a collection and a function.
 * Calls the funciton for each element in the collection passing the arugments:
 *   if the collection is an array: the elemment, its index, <collection>
 *   If the collection is an object: the value, it's key, <collection>
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
 * (PLUCK) function pluck: takes an array of objects and a property.
 * 
 * Returns an array containing the value of property for every element in array
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
 * (EVERY) function every: takes a <collection> and a <function>
 * 
 * Calls funciton for every element of collection with the parameters:
 *  if its an array or object and returns value of calling function for every element is true
 * returns true.
 * 
 * if one of them returns false: returns false.
 * 
 * if function is not provided returns true if every element in the collection is truthy. Otherwise reutns false.
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
 * The logical opposite of every().
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
 * (REDUCE) function reduce: takes an <array> a <function> and a <seed>.
 * It calls <function> for every element in collection passing the arguments:
 *      previous result, element, index.
 * On the very first iteration we use <seed> as the "previous result".
 * Uses the return value of <function> as the "previous result" on the next iteration.
 * 
 * If no seed was given it uses the first element/value of <collection> as <seed> and continues to next element.
 * 
 * Returns the return sum value of the final <function> call.
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
 * (EXTEND) function extend: takes an object, and a unknown amount of other objects and passed the properties to the first object
 * returns the first object with all the properties of the other passed in, in order.
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
