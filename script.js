function processForm(event) {
  console.log('Form', event);
  // Find our form in the DOM using its class name.
  const form = document.forms[0];
  const formData = toJSONString(form)
  console.log(formData);
  // construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // send the collected data as JSON
  xhr.send(formData);

  xhr.onloadend = function () {
    // done
    console.log('Did It');
  };
}

function toJSONString(form) {
  var obj = {};
  var elements = form.querySelectorAll("input, select, textarea");
  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}

window.onload = function pageLoaded() {
  // your page initialization code here
  // the DOM will be available here
  console.log("Page Ready");

  document.getElementById('sample-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(toJSONString(e.target));
  });
};