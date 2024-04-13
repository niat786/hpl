function nextSiblings(element) {
    const siblings = [];
    let nextSibling = element.nextElementSibling;
    // Traverse the DOM hierarchy to find next siblings
    while (nextSibling) {
        siblings.push(nextSibling);
        nextSibling = nextSibling.nextElementSibling;
    }
    return siblings;
}
export default nextSiblings;
