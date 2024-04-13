declare function find(selector?: string): {
    elements: Element;
    find: (subSelector: string) => any | null;
} | null;
export default find;
