event.preventDefault() : It stopped the form from refreshing the page, letting me handle validation and submission logic with JavaScript.

HTML5 vs JS validation : HTML5 gives built-in checks (like required, type="email"), while JS allows custom rules and custom error messages. Using both combines simplicity (HTML5) with flexibility (JS).

localStorage : I saved the username with localStorage.setItem() and loaded it back with getItem() on page load. Limitation: data isn’t secure (anyone with access to the browser can see it).

Challenge in real-time validation : Errors weren’t showing if fields were untouched. Solved it by using dispatchEvent(new Event("input")) during form submission to force checks.

User-friendly error messages : I wrote clear, simple text (like “Passwords do not match”) and only showed them when the field was invalid, so users knew exactly what to fix.
