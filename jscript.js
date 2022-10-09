let hShadow = document.querySelector(".h-shadow");
let vShadow = document.querySelector(".v-shadow");
let bRadius = document.querySelector(".b-radius");
let sRadius = document.querySelector(".s-radius");
let shadowCol = document.querySelector(".sh-color");
let block = document.querySelector(".block");
let out = document.querySelector(".out");
let copy = document.querySelector(".copy");


hShadow.oninput = horizShadow;
vShadow.oninput = verticShadow;
bRadius.oninput = blurRadius;
sRadius.oninput = spreadRadius;
shadowCol.oninput = shadowColor;
s

function horizShadow() {
  block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;

  out.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`; 
}

function verticShadow () {
  block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;

  out.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`; 
}

function blurRadius() {
  block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;

  out.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`; 
}

function spreadRadius() {
  block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;

  out.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`; 
}
  function shadowColor() {
    block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;

    out.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`; 
}

copy.onclick = function () {
  let text = out.innerHTML;

  window.navigator.clipboard.writeText(text);
  alert("Copied");
  
}
