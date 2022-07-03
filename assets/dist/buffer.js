var video = document.getElementById('videoSeri1');
var placeholder = document.getElementById('placeholder_1');

videoSeri1.onwaiting = function () {
    showPlaceholder(placeholder_1, this);
    console.log('onWaiting');
};
videoSeri1.onplaying = function () {
    hidePlaceholder(placeholder_1, this);
    console.log('onPlaying');
};

function showPlaceholder(img, vid) {
    img.style.display = 'block';
}

function hidePlaceholder(img, vid) {
    img.style.display = 'none';
}
