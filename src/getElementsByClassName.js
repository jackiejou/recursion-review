var getElementsByClassName = function(className) {
  var result = [];
  // create recursive function for each node of the DOM
  var searchElements = function (node) {
    // check the element's classList for className
    if (node.classList) {
      if (node.classList.contains(className)) {
        result.push(node);
      }
    }
    // also check for childNodes and use recursion on each child node
    if (node.childNodes.length) {
      node.childNodes.forEach(function(item) {
        searchElements(item);
      });
    }
  }
  searchElements(document.body);
  return result;
};
