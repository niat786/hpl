function parents(element: Element) {
    const parents = [];
    let currentElement = element.parentNode;

    while (currentElement !== null && currentElement !== document) {
        parents.push(currentElement);
        currentElement = currentElement.parentNode;
    }

    return parents;
}

export default parents;
