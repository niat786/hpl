function find(selector = 'selector') {
    const element = document.querySelectorAll(selector);
    if (!element) {
        console.error(`Element with selector '${selector}' not found`);
        return null;
    }
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
    return constructFindObject(element);
}
export default find;
