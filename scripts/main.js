ready(function(){
    var nav = responsiveNav('.nav-collapse');
});

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var script = document.createElement('script');
script.src = 'https://api.instagram.com/v1/users/1805388781/media/recent/?client_id=6f84264e1db54f31b62a2a823557f7f3&callback=handler';

document.getElementsByTagName('head')[0].appendChild(script);

function handler(response)
{
    response.data.forEach(function(post, i){
        if(i >= 15) {
            return;
        }
        var imageContainer = document.createElement('a');
        imageContainer.setAttribute('href', post.link);
        imageContainer.setAttribute('target', '_blank');
        imageContainer.classList.add('instagram_post');
        var image = document.createElement('img');
        image.setAttribute('src', post.images.standard_resolution.url);
        imageContainer.appendChild(image);
        document.getElementsByClassName('instagram_posts')[0].appendChild(imageContainer);
    })
}
