Object.prototype.deepClone = function() {
  return JSON.parse(JSON.stringify(this));
}