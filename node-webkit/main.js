var gui = require('nw.gui');    	   
var win = gui.Window.get();
win.hide();            

var socket = io.connect('http://localhost:3000');
socket.on('start', function(){
    gui.Window.open('app.html', {
        "toolbar": false,
        "frame": false,
        "width": 350,
        "height": 500,
        "position": "center",
        "resizable": false
    });
});
