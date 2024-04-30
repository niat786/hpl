export function form(formId) {
    const form = document.getElementById(formId);
    const formData = {};

    if (form) {
        const elements = form.elements;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const elementType = element.nodeName.toLowerCase();
            const elementName = element.name;

            if (elementName) {
                if (elementType === 'input' || elementType === 'textarea' || elementType === 'select') {
                    if (element.type !== 'submit' && element.type !== 'reset' && element.type !== 'button') {
                        if (elementType === 'select' && element.multiple) {
                            const selectedOptions = [];
                            for (let j = 0; j < element.options.length; j++) {
                                if (element.options[j].selected) {
                                    selectedOptions.push(element.options[j].value);
                                }
                            }
                            formData[elementName] = selectedOptions;
                        } else {
                            formData[elementName] = element.value;
                        }
                    }
                }
            }
        }
    }

    return formData;
}
