function on(element: HTMLElement, event: string, handler: EventListenerOrEventListenerObject): void {
    element.addEventListener(event, handler);
}
export default on
