export function cloneDeep(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
        // If obj is not an object or is null, return it directly
        return obj;
    }

    if (Array.isArray(obj)) {
        // If obj is an array, clone each element recursively
        return obj.map((item: any) => cloneDeep(item));
    }

    // If obj is an object, clone each property recursively
    const clonedObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = cloneDeep(obj[key]);
        }
    }
    return clonedObj;
}

// debounce
export function debounce<T>(
    func: (this: T, ...args: any[]) => void, wait: number): (this: T, ...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function(this: T, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

// isEmpty
export function isEmpty(value: any): boolean {
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
export function throttle<T>(
    func: (this: T, ...args: any[]) => void,
    wait: number
): (this: T, ...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let previousTime = 0;

    return function(this: T, ...args: any[]) {
        const currentTime = Date.now();
        const timeSinceLastExecution = currentTime - previousTime;

        if (!timeoutId && timeSinceLastExecution >= wait) {
            func.apply(this, args);
            previousTime = currentTime;
        } else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                previousTime = Date.now();
                timeoutId = undefined;
            }, wait - timeSinceLastExecution);
        }
    };
}