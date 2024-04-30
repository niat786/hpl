export function getField(fieldName) {
    const inputField = document.querySelector(`[name="${fieldName}"]`);
    if (!inputField) {
        console.error(`Input field with name '${fieldName}' not found.`);
        return '0';
    }
    if (inputField.type === 'file') {
        return inputField.files;
    }
    if (inputField.type === 'checkbox' || inputField.type === 'radio') {
        return (inputField.checked ? 'on' : '');
    }
    return inputField.value;
}
