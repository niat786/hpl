function toggleClasses(element, ...classNames) {
    classNames.forEach(className => {
        if (element.classList) {
            element.classList.toggle(className);
        }
        else {
            const classes = element.className.split(' ');
            const index = classes.indexOf(className);
            if (index !== -1) {
                classes.splice(index, 1);
            }
            else {
                classes.push(className);
            }
            element.className = classes.join(' ');
        }
    });
}
export default toggleClasses;
