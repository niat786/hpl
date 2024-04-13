function find(selector = 'selector') {
    let elements = document.querySelector(selector);

    // Recursive function to construct the object with nested find methods
    function constructFindObject(currentElements) {
        return {
            elements: currentElements,
            find: function(subSelector) {
                return constructFindObject(currentElements.querySelector(subSelector));
            }
        };
    }

    // Return the initial object
    return constructFindObject(elements);
}

export default find;
