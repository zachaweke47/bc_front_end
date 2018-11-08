function processForm(event) {
  console.log('Form', event);
  // Find our form in the DOM using its class name.
  const form = document.getElementByClassName('#sample-form')[0];

// Get the form data with our (yet to be defined) function.
  const data = getFormDataAsJSON(form);
  console.log(data);
}

(function() {
  // your page initialization code here
  // the DOM will be available here
  console.log("Page Ready");



})();