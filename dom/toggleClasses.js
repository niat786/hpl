function toggleClasses(element, ...classNames) {
    classNames.forEach(className => {
        if (element.classList) {
            // Use classList API if available
            element.classList.toggle(className);
        }
        else {
            // Fallback for older browsers
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
