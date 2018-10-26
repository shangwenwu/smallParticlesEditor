export default (function(module){
  module.aa = 111;
  module.cc = function(arg){
    this.aa = arg;
    console.log(arg)
  }
  return module
})((function(){
  return {}
})());