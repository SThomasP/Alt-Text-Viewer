
function save(event){
  var toSet = document.querySelector('#min_size').value;
  var setting = browser.storage.local.set({min: toSet});
  event.preventDefault();
}

function restoreDefault(event){
 var getting = browser.storage.local.get('defaults');
 getting.then((res) => {
   document.querySelector('#min_size').value = res.defaults.min;
 })

}

function restore(){
  var getting = browser.storage.local.get('min');
  getting.then((res) => {
    document.querySelector('#min_size').value = res.min;
  });
}

document.addEventListener("DOMContentLoaded", restore);
document.querySelector('form').addEventListener("submit", save);
document.querySelector('#minDefault').addEventListener("click", restoreDefault);