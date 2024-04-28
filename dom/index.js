export function find(...args) {
    let selector;
    let returnAs = 'element';
    if (args.length === 1) {
        if (typeof args[0] === 'object') {
            selector = args[0].selector;
            returnAs = args[0].returnAs;
        }
        else if (typeof args[0] === 'string') {
            selector = args[0];
        }
    }
    else {
        selector = args[0];
        returnAs = args[1];
    }
    const element = document.querySelector(selector);
    if (!element) {
        console.error(`Element with selector '${selector}' not found`);
        return null;
    }
    // Recursive function to construct the object with nested find methods
    function constructFindObject(currentElement) {
        return {
            element: currentElement,
            find: function (subSelector) {
                let subElement;
                if (typeof document !== 'undefined' && document.querySelector) {
                    subElement = document.querySelector(subSelector);
                }
                else {
                    subElement = currentElement.querySelector(subSelector);
                }
                if (!subElement) {
                    console.error(`Child element with selector '${subSelector}' not found`);
                    return null;
                }
                return constructFindObject(subElement);
            }
        };
    }
    if (returnAs === 'object') {
        return constructFindObject(element);
    }
    return element;
}
// find all
export function findAll(selector = 'selector') {
    const element = document.querySelectorAll(selector);
    if (!element) {
        console.error(`Element with selector '${selector}' not found`);
        return null;
    }
    // Recursive function to construct the object with nested find methods
    function constructFindObject(currentElement) {
        return {
            elements: currentElement,
            find: function (subSelector) {
                const subElement = currentElement.querySelectorAll(subSelector);
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
