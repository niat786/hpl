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
// usage:
// const myElement = createElement('div', {
//     id: 'div-id',
//     class: 'div_class',
//     style: 'color: green;'
// });
// document.body.appendChild(myElement);
