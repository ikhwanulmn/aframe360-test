/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
    init: function () {
        this.onClick = this.onClick.bind(this);
        this.el.object3D.visible = true;
        console.log('video ready');
    },
    play: function () {
        window.addEventListener('click', this.onClick);
    },
    pause: function () {
        window.removeEventListener('click', this.onClick);
    },
    onClick: function (evt) {
        var videoEl = this.el.getAttribute('material').src;
        if (!videoEl.paused) {
            videoEl.pause();
            console.log('pause');
        } else {
            videoEl.play();
            console.log('play');
        }
        evt.preventDefault();
        evt.stopPropagation();
    },
});
