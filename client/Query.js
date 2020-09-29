module.exports = function getURLParam(name, url){
  var values = [];
  if (!url) url = location.href;

  var nameWithoutBrackets = name.replace(/\[\]/g, '');
  var multiple = name !== nameWithoutBrackets;
  var pattern = nameWithoutBrackets + "(?:\\[\\]|%5B%5D)*=([^&#]+)";

  var reg = new RegExp(pattern, 'ig');
  while (true) {
    var matches = reg.exec(url);
    if (matches && matches[1]){
      values.push(decodeURIComponent(matches[1]));
    } else {
      break;
    }
  }

  if (!values.length){
    return null;
  } else if (multiple){
    return values;
  } else {
    return values[0];
  }
};
