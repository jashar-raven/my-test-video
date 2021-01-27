// Get the Component base class from Video.js
var Component = videojs.getComponent('Component');

var TitleBar = videojs.extend(Component, {

    constructor: function(player, options) {

        Component.apply(this, arguments);

        if (options.text) {
            this.updateTextContent(options.text);
        }
    },

    createEl: function() {
        return videojs.createEl('div', {

            className: 'vjs-title-bar'
        });
    },

    updateTextContent: function(text) {

        if (typeof text !== 'string') {
            text = 'Title Unknown';
        }

        videojs.emptyEl(this.el());
        videojs.appendContent(this.el(), text);
    }
});

videojs.registerComponent('TitleBar', TitleBar);

// Create a player.
var player = videojs('my-player');

// Add the TitleBar as a child of the player and provide it some text
// in its options.
player.addChild('TitleBar', {text: 'Hakan is controlling.'});

player.on('pause', function() {

    var modal = player.createModal('This is a modal!');

    modal.on('modalclose', function() {
        player.play();
    });
});
