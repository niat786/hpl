function previousSiblings(element: Element): Element[] {
    const siblings: Element[] = [];
    let previousSibling = element.previousElementSibling;

    // Traverse the DOM hierarchy to find previous siblings
    while (previousSibling) {
        siblings.push(previousSibling);
        previousSibling = previousSibling.previousElementSibling;
    }

    return siblings;
}

export default previousSiblings;
