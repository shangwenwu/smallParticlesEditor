; (function (root, factory) {
  if (typeof exports === "object") {
    // CommonJS
    module.exports = exports = factory();
  }
  else if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  }
  else {
    // Global (browser)
    root.Editor = factory();
  }
}(this, function () {

  var Editor = {
    aa: 11,
    bb: 22,
    cc: function(arg){
      this.aa = arg;
      console.log(arg)
    }
  }
  return Editor;

}));