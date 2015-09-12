ready(function(){
  var s = skrollr.init({
       render: function(data) {
           //Debugging - Log the current scroll position.
           //console.log(data.curTop);
       }
   });
});

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
