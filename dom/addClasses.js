function addClasses(element, ...classNames) {
    if (element.classList) {
        // Use classList API if available
        element.classList.add(...classNames);
    }
    else {
        // Fallback for older browsers
        const classes = element.className.split(' ');
        classNames.forEach(className => {
            if (classes.indexOf(className) === -1) {
                classes.push(className);
            }
        });
        element.className = classes.join(' ');
    }
}
export default addClasses;
// Example usage:
// const myElement = document.getElementById('myElement');
// if (myElement) {
//     addClasses(myElement, 'class1', 'class2', 'class3');
// }
