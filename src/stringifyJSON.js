var stringifyJSON = function(value) {
  // Primitives and exceptions
  if (value === null || typeof value === 'number' || typeof value === 'boolean') {
    return value + '';
  }

  if (typeof value === 'string') {
    return '"' + value + '"';
  }

  if (typeof value === 'function' || value === undefined) {
    return '';
  }

  // Array, stringify each element
  if (Array.isArray(value)) {
    var result = [];
    value.forEach(function (element) {
      result.push(stringifyJSON(element));
    });
    return '[' + result.join(',') + ']';
  }

  //Object, stringify each key and value pair
  if (typeof value === 'object') {
    var result = [];
    for (var key in value) {
      if (key !== 'functions' && key !== 'undefined') {
        result.push('"' + key + '":' + stringifyJSON(value[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }
};
