ready(function(){
    var nav = responsiveNav('.nav-collapse');

    getRequest('https://api.instagram.com/v1/users/1805388781/media/recent/?client_id=6f84264e1db54f31b62a2a823557f7f3',
    function() {
        console.log(this.response);
    })
});

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function getRequest(url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', callback);
    oReq.open('GET', url, true);
    oReq.send();
}
