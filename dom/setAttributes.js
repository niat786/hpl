function setAttributes(element, attributes) {
    if (!element || !attributes || typeof attributes !== 'object') {
        console.error('Invalid parameters provided to setAttributes function.');
        return;
    }
    for (const key in attributes) {
        if (Object.hasOwnProperty.call(attributes, key)) {
            if (key === 'class' && element.classList) {
                // Append classes to the existing class attribute
                const existingClasses = element.getAttribute('class') || '';
                const newClasses = attributes[key];
                const combinedClasses = `${existingClasses} ${newClasses}`;
                element.setAttribute('class', combinedClasses.trim());
            }
            else {
                // Set other attributes as usual
                element.setAttribute(key, attributes[key]);
            }
        }
    }
    return element;
}
export default setAttributes;
