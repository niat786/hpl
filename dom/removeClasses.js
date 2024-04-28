function removeClasses(element, ...classNames) {
    if (element.classList) {
        element.classList.remove(...classNames);
    }
    else {
        // Fallback for older browsers
        const classes = element.className.split(' ');
        classNames.forEach(className => {
            const index = classes.indexOf(className);
            if (index !== -1) {
                classes.splice(index, 1);
            }
        });
        element.className = classes.join(' ');
    }
}
export default removeClasses;
// Example usage:
// const myElement = document.getElementById('myElement');
// if (myElement) {
//     removeClasses(myElement, 'class1', 'class2', 'class3');
// }
