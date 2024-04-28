function addClasses(element, ...classNames) {
    if (element.classList) {
        element.classList.add(...classNames);
    }
    else {
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
