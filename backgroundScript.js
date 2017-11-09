/*
* Default Values of options
*/
var defaults = {
  min: 39000
};



function onError(e){
  console.error(e);
}


// to be run when the app is installed.
function checkStorage(res){
    var keys = Object.keys(defaults);
    for (var i = 0; i < keys.length;i++){
      var nthKey = keys[i];
      if (!res[nthKey]){
        var storage = {};
        storage[nthKey] = defaults[nthKey];
        browser.storage.local.set(storage);
        // console.log(nthKey+ ' set');
      }
    }
  if (!res.defaults){
    browser.storage.local.set({defaults: defaults});
    // console.log("default values set.");
  }
}

var keys = Object.keys(defaults);
keys.push('defaults');
const gettingStoredSettings = browser.storage.local.get(keys);
gettingStoredSettings.then(checkStorage, onError);
