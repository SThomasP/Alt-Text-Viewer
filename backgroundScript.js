/*
* Default Values of options
*/
var defaults = {
  min: 39000
};

//Check if stored, if not set to default.

function onError(e){
  console.error(e);
}

function initStorage(settings){
  var keys = Object.keys(defaults);
  for (var i = 0; i < keys.length;i++){
    var nthKey = keys[i];
    var storage = {};
    storage[nthKey] = defaults[nthKey];
    browser.storage.local.set(storage);
    console.log(nthKey+ ' set');
  }
  browser.storage.local.set({defaults: defaults});
  console.log("default values set.");
}

browser.storage.onChanged.addListener(function (changes, type){
  console.log(changes);
});

browser.runtime.onInstalled.addListener(initStorage);

