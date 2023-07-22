// This function adds a CSS class to elements containing the text.
function addBionicTextStyle() {
    const elements = document.querySelectorAll('*');
    for (const element of elements) {
      const text = element.textContent.trim();
      element.classList.add('bionic-text'); // Add the CSS class 'bionic-text'.
    }
  }
  
  // Execute the function when the content script is loaded.
  addBionicTextStyle();
  