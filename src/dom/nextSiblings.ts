function nextSiblings(element: Element): Element[] {
    const siblings: Element[] = [];
    let nextSibling = element.nextElementSibling;

    // Traverse the DOM hierarchy to find next siblings
    while (nextSibling) {
        siblings.push(nextSibling);
        nextSibling = nextSibling.nextElementSibling;
    }

    return siblings;
}

export default nextSiblings;
