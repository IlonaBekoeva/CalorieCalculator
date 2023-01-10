let count = document.querySelector('.count_button');
let physAct;
age.value = 0;
height.value = 0;
weight.value = 0;
count.setAttribute('disabled', true);
let clear = document.querySelector('.clear_button');
clear.setAttribute('disabled', true);
age.oninput = function () {
  if (age.value != 0 && height.value != 0 && weight.value != 0) {
    count.removeAttribute('disabled');
  }
  else {
    count.setAttribute('disabled', true);
  }
  if (age.value != 0 || height.value != 0 || weight.value != 0) {
    clear.removeAttribute('disabled');
  }
  else {
    clear.setAttribute('disabled', true);
  }
}
weight.oninput = function () {
  if (age.value != 0 && height.value != 0 && weight.value != 0) {
    count.removeAttribute('disabled');
  }
  else {
   count.setAttribute('disabled', true);
  }
  if (age.value != 0 || height.value != 0 || weight.value != 0) {
    clear.removeAttribute('disabled');
  }
  else {
    clear.setAttribute('disabled', true);
  }

}
height.oninput = function () {
  if (age.value != 0 && height.value != 0 && weight.value != 0) {
    count.removeAttribute('disabled');
  }
  else {
    count.setAttribute('disabled', true);
  }
  if (age.value != 0 || height.value != 0 || weight.value != 0) {
    clear.removeAttribute('disabled');
  }
  else {
      clear.setAttribute('disabled', true);
  }
}
  clear.onclick = function () {
  clear.setAttribute('disabled', true);
  age.value = 0;
  height.value = 0; 
  weight.value = 0;
  document.querySelector('.footer').classList.add('hidden_container');
}
  count.onclick = function () {
  document.querySelector('.footer').classList.remove('hidden_container');
  count.setAttribute('disabled', true);
  let a = document.getElementsByName('activity');
  for (let i = 0; i<a.length; i++) {
  if (a[i].checked) {
    physAct = a[i].value;
  }
}
let maintaining;
let decline;
let kit;
let ratioAct = 1.2;
if (physAct == 'min') {
  ratioAct = 1.2;
}
else if (physAct == 'low') {
  ratioAct = 1.375;
}
else if (physAct == 'average') {
  ratioAct = 1.55;
}
else if (physAct == 'high') {
  ratioAct = 1.725;
}
else if (physAct == 'very_high') {
  ratioAct = 1.9;
}
if ('gender' == 'man') {
maintaining = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
maintaining *= ratioAct;
}
else {
maintaining = (10 * weight.value) + (6.25 * height.value) - (5* age.value) - 161;
}
decline = maintaining - (maintaining / 100 * 15);
kit =  maintaining + (maintaining/ 100 * 15);
document.querySelector('.maintaining').innerHTML = Math.round(maintaining) + ' ккал';
document.querySelector('.decline').innerHTML = Math.round(decline) + ' ккал';
document.querySelector('.kit').innerHTML = Math.round(kit) + ' ккал';
}