function getImagesWithAlt(min){
    var x = document.getElementsByTagName("img");
    var i;
    var y = [];
      for (i =0; i<x.length; i++) {
          if ( (x[i].title != "") && (x[i].width * x[i].height > min)){
            y.push(x[i]);
          }
      }
    return y;
}

function createBoundingBox(){
    node = document.createElement("div");
    node.style = "outline-color:lightgrey;outline-style:dashed;"
    return node;
}

function createParagraph(){
    paragraph = document.createElement("p");
    paragraph.style = "text-align:center;font-family:sans-serif;font-size:12px;color:black;background-color:lemonchiffon;"
    return paragraph;
}

function seperateTitle(image){
    node = createBoundingBox();
    alt = createParagraph();
    alt.appendChild(document.createTextNode(image.title));
    parent = image.parentNode;
    parent.replaceChild(node, image);
    node.appendChild(image);
    node.appendChild(alt);
}

var storageItem = browser.storage.local.get('min');
storageItem.then((res) => {
var altImages = getImagesWithAlt(res.min);
for (var i=0; i < altImages.length; i ++){
    seperateTitle(altImages[i]);
}});

