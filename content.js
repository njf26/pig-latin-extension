var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) { //if it's a text node
          var text = node.nodeValue;
          var textArray = text.split(" ");
          var result;
          for (let i = 0; i < textArray.length; i++) {
              var pigLatin = textArray[i].slice(1) + textArray[i].slice(0,1) + "ay";
              result = text.replace(textArray[i], pigLatin);
              text = result;
          }

          element.replaceChild(document.createTextNode(result), node);
      }
    }
}
