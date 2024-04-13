declare function find(selector?: string): {
    elements: any;
    find: (subSelector: string) => any | null;
} | null;
export default find;
