export declare function find(...args: any): any;
export declare function findAll(selector?: string): {
    elements: any;
    find: (subSelector: string) => any | null;
} | null;
