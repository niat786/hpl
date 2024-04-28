function parent(target = '#id') {
    if (typeof target === 'string') {
        if (target.startsWith('#')) {
            const element = document.getElementById(target.slice(1));
            return element ? element.parentNode : null;
        }
        else if (target.startsWith('.')) {
            const elements = document.getElementsByClassName(target.slice(1));
            return elements.length > 0 ? elements[0].parentNode : null;
        }
    }
    else if (typeof target === 'object' && target.nodeName) {
        return target.parentNode;
    }
    return null;
}
export default parent;
