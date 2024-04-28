function off(element: HTMLElement, event: string, handler: EventListenerOrEventListenerObject): void {
    element.removeEventListener(event, handler);
}
export default off
