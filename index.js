console.log('bobbyhadz.com');

const allElements = document.getElementsByTagName('*');

// ✅ Loop through all elements (including html, head, meta, scripts)
for (const element of allElements) {
  console.log(element);
}

console.log('--------------------');

// ✅ Loop through all elements in body
const allInBody = document.querySelectorAll('body > *');
for (const element of allInBody) {
  console.log(element);
}
