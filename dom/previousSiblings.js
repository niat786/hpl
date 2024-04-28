function previousSiblings(element) {
    const siblings = [];
    let previousSibling = element.previousElementSibling;
    while (previousSibling) {
        siblings.push(previousSibling);
        previousSibling = previousSibling.previousElementSibling;
    }
    return siblings;
}
export default previousSiblings;
