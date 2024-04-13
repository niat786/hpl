function el(selector = '#id', mode = 'single') {
    let elements;

    if (mode === 'all' && !selector.startsWith('#')) {
        elements = document.querySelectorAll(selector);
    } else {
        elements = document.querySelector(selector);
        return elements;
    }

    // Define methods for method chaining
    const methods = {
        el: function(newSelector) {
            return el(newSelector, 'all'); // Return selected elements using the new selector
        },
        // Add more methods here for additional functionality
    };

    // Extend elements with methods
    if (mode === 'all') {
        elements.forEach((element, index) => {
            Object.assign(element, methods);
        });
    } else {
        Object.assign(elements, methods);
    }

    return elements;
}

export default el;
