// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  // if obj is null, stringify null
  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  // if obj is an Array, stringify each element
  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length > 0) {
      for (var i = 0; i < obj.length; i++) {
        result.push(stringifyJSON(obj[i]));
      }
      return '[' + result.join(',') + ']';
    } else {
      return '[]';
    }
    
  }
  // if obj is an Object, stringify each key and value pair

  if (typeof obj === 'object') {
    var result = [];
    
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
      
    return '{' + result.join(',') + '}';
  }  
};
