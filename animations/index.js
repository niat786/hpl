export function fadeIn(element, duration) {
    element.style.opacity = '0';
    element.style.transition = `opacity ${(duration * 10) / 1000}s`;
    element.style.display = 'block';
    element.getBoundingClientRect();
    element.style.opacity = '1';
}
export function fadeOut(element, duration) {
    element.style.transition = `opacity ${duration / 1000}s`;
    element.style.opacity = '1';
    element.getBoundingClientRect();
    element.style.opacity = '0';
}
export function slideIn(element, duration) {
    const initialHeight = element.offsetHeight;
    element.style.transition = `height ${duration / 1000}s`;
    element.style.overflow = 'hidden';
    element.style.height = '0';
    element.getBoundingClientRect();
    element.style.height = `${initialHeight}px`;
}
export function slideOut(element, duration) {
    const initialHeight = element.offsetHeight;
    element.style.transition = `height ${duration / 1000}s`;
    element.style.overflow = 'hidden';
    element.style.height = `${initialHeight}px`;
    element.getBoundingClientRect();
    element.style.height = '0';
}
