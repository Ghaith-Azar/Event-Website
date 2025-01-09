function enableTouchHoverForAll() {
    // Select all elements that have CSS hover styles
    const hoverElements = Array.from(document.querySelectorAll('*')).filter((el) => {
      // Check if the element has any hover styles
      const hoverStyles = window.getComputedStyle(el, ':hover');
      return hoverStyles.cssText !== '';
    });
  
    // Add touch event listeners to simulate hover on touch devices
    hoverElements.forEach((element) => {
      element.addEventListener('touchstart', () => {
        element.classList.add('hover-active');
      });
  
      element.addEventListener('touchend', () => {
        element.classList.remove('hover-active');
      });
  
      element.addEventListener('touchmove', () => {
        element.classList.remove('hover-active');
      });
    });
  }
  
  // Run the function after the DOM has loaded
  document.addEventListener('DOMContentLoaded', enableTouchHoverForAll);
  