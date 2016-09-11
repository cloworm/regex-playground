module.exports = function shareLink(pattern, flags, matches) {
  var url = `${window.location.protocol}//${window.location.host}`;
  var params = [];
  if (pattern.length > 0) {
    if (params.length < 1) url += '?';
    params.push(`pattern=${encodeURIComponent(pattern)}`);
  }
  if (flags.length > 0) {
    if (params.length < 1) url += '?';
    params.push(`flags=${encodeURIComponent(flags)}`);
  }
  if (matches.length > 0 && matches[0] !== '') {
    if (params.length < 1) url += '?';
    matches.forEach(function(match) {
      params.push(`matches[]=${encodeURIComponent(match)}`);
    });
  }

  return url + params.join('&');
};
