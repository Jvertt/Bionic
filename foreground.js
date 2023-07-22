// This function applies the bionic effect to a text node, highlighting the first few letters of each word.
function applyBionicEffectToTextNode(textNode) {
    const words = textNode.textContent.trim().split(' ');
    let bionicText = '';
  
    for (const word of words) {
      let bionicWord = '';
  
      for (let i = 0; i < word.length; i++) {
        // Wrap the first three letters of each word in <span> tags with the 'bold' style.
        const bionicLetter = i < 3 ? `<span style="font-weight: bold;">${word[i]}</span>` : `<span>${word[i]}</span>`;
        bionicWord += bionicLetter;
      }
  
      bionicText += bionicWord + ' ';
    }
  
    // Create a temporary element to set the innerHTML with the bionic effect.
    const tempElement = document.createElement('span');
    tempElement.innerHTML = bionicText;
  
    // Replace the text node with the modified HTML.
    textNode.parentNode.insertBefore(tempElement, textNode);
    textNode.parentNode.removeChild(textNode);
  }
  
  // This function recursively traverses through the DOM and applies the bionic effect to text nodes.
  function traverseDOMAndApplyBionicEffect(node) {
    const children = node.childNodes;
    for (const child of children) {
      if (child.nodeType === Node.TEXT_NODE) {
        applyBionicEffectToTextNode(child);
      } else if (child.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE', 'META', 'TITLE', 'LINK'].includes(child.tagName.toUpperCase())) {
        traverseDOMAndApplyBionicEffect(child);
      }
    }
  }
  
  // This function applies the bionic effect to text-containing elements.
  function addBionicTextStyle() {
    const body = document.querySelector('body');
    traverseDOMAndApplyBionicEffect(body);
    body.classList.add('bionic-text'); // Add the CSS class 'bionic-text' to the body.
  }
  
  // Execute the function when the content script is loaded.
  addBionicTextStyle();