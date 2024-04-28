export function cloneDeep(obj) {
    if (typeof obj !== 'object' || obj === null) {
        // If obj is not an object or is null, return it directly
        return obj;
    }
    if (Array.isArray(obj)) {
        // If obj is an array, clone each element recursively
        return obj.map((item) => cloneDeep(item));
    }
    // If obj is an object, clone each property recursively
    const clonedObj = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = cloneDeep(obj[key]);
        }
    }
    return clonedObj;
}
// debounce
export function debounce(func, wait) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}
// isEmpty
export function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }
    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length === 0;
    }
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }
    return false;
}
// throttle
export function throttle(func, wait) {
    let timeoutId;
    let previousTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        const timeSinceLastExecution = currentTime - previousTime;
        if (!timeoutId && timeSinceLastExecution >= wait) {
            func.apply(this, args);
            previousTime = currentTime;
        }
        else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                previousTime = Date.now();
                timeoutId = undefined;
            }, wait - timeSinceLastExecution);
        }
    };
}
