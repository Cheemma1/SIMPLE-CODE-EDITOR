let html = document.getElementById("htmlcode");
let cssCode = document.getElementById("csscode");
let jsCode = document.getElementById("jscode");
let output = document.getElementById("code-output");
let saveButton = document.getElementById("save-button");

// Load saved code on page load
window.onload = () => {
  restoreData();
  spin();
};

// Save code when the Save button is clicked
saveButton.onclick = () => {
  storeData();
  alert("Code saved successfully!");
};

// Save code when the page is unloaded (e.g. when the user refreshes or closes the page)
window.onbeforeunload = () => {
  storeData();
};

// Run the code and display the output
function run() {
  let htmlCode = html.value;
  let cssCodeValue = cssCode.value;
  let jsCodeValue = jsCode.value;
  let iframeDocument = output.contentDocument;
  iframeDocument.open();
  iframeDocument.write(
    `${htmlCode}<style>${cssCodeValue}</style><script>${jsCodeValue}</script>`
  );
  iframeDocument.close();
}

// Store the code in localStorage
function storeData() {
  localStorage.setItem("htmlCode", html.value);
  localStorage.setItem("cssCode", cssCode.value);
  localStorage.setItem("jsCode", jsCode.value);
}

// Restore the code from localStorage
function restoreData() {
  html.value = localStorage.getItem("htmlCode") || "";
  cssCode.value = localStorage.getItem("cssCode") || "";
  jsCode.value = localStorage.getItem("jsCode") || "";
  run();
};




// toggle btn

let btn = document.getElementById('toggle');
let body = document.getElementById('body');
let area = document.querySelectorAll('textarea')

btn.addEventListener('click', function(){
this.classList.toggle('fa-moon');
if(this.classList.toggle('fa-sun')){

body.style.background= "white";
body.style.transition= "2s ";
output.style.background="rgb(189, 191, 194)";
output.style.color="black";

area.forEach(textarea =>{
textarea.style.background="rgb(189, 191, 194)";
textarea.style.transition="2s";
textarea.style.color="black";
});

}
else{
   body.style.background= "#000";
  body.style.transition= "2s all";
 output.style.background="#1f1f1f";
 output.style.transition="2s";
 body.style.color="white";
output.style.color="white";

area.forEach(textarea =>{
textarea.style.background='#11f1f1f';
textarea.style.transition="2s";
textarea.style.color="white";
});
}
});

function spin(){
    btn.style.transform=' rotate(360deg)'
}