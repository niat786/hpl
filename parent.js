function parent(target = '#id') {
    // Check if the target is a string (ID or class)
    if (typeof target === 'string') {
        // Check if the target starts with '#', indicating an ID
        if (target.startsWith('#')) {
            const element = document.getElementById(target.slice(1));
            return element ? element.parentNode : null;
        }
        // Check if the target starts with '.', indicating a class
        else if (target.startsWith('.')) {
            const elements = document.getElementsByClassName(target.slice(1));
            // For simplicity, return the parent of the first matching element
            return elements.length > 0 ? elements[0].parentNode : null;
        }
    }
    // Check if the target is an HTML element
    else if (typeof target === 'object' && target.nodeName) {
        return target.parentNode;
    }
    // Default case: return null for invalid targets
    return null;
}
export default parent;
