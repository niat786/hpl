function nextSiblings(element) {
    const siblings = [];
    let nextSibling = element.nextElementSibling;
    while (nextSibling) {
        siblings.push(nextSibling);
        nextSibling = nextSibling.nextElementSibling;
    }
    return siblings;
}
export default nextSiblings;
