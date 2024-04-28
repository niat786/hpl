function removeClasses(element, ...classNames) {
    if (element.classList) {
        element.classList.remove(...classNames);
    }
    else {
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
