// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  // loop through each element of the document.body for className
  function searchElements (node) {
    // check the element's classList if it contains className
    if (node.classList) {
      if (node.classList.contains(className)) {
        // if yes, add to the results list
        result.push(node);
      }
    }
    // check if this element has childNodes
    if (node.childNodes.length > 0) {
      // if childNodes, then recall this function recursively
      node.childNodes.forEach(function(item) {
        searchElements(item);
      });
    }  
  }
  searchElements(document.body);
  return result;
};
