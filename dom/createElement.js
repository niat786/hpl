function createElement(tagName, attributes) {
    const element = document.createElement(tagName);
    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }
    return element;
}
export default createElement;
