function find(selector: string = 'selector') {
    const element = document.querySelector(selector);

    if (!element) {
        console.error(`Element with selector '${selector}' not found`);
        return null;
    }

    // Recursive function to construct the object with nested find methods
    function constructFindObject(currentElement: Element) {
        return {
            elements: currentElement,
            find: function(subSelector: string) {
                const subElement = currentElement.querySelector(subSelector);
                if (!subElement) {
                    console.error(`Child element with selector '${subSelector}' not found`);
                    return null;
                }
                return constructFindObject(subElement);
            }
        };
    }

    // Return the initial object
    return constructFindObject(element);
}

export default find;