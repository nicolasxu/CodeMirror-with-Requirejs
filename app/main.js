// Load common module for all the pages and specific script for individual page depending on route name
// https://github.com/cloudchen/requirejs-bundle-examples/blob/master/src/common.js1
require.config({
    baseUrl: 'bower_components',
    paths: {
         //'codemirror': 'codemirror/lib/codemirror'
        // 'markdown': '../bower_components/codemirror/mode/gfm/gfm'
    }
});
// 
require(['codemirror/lib/codemirror',
	       'codemirror/mode/markdown/markdown'], function(cm){
	function update() {}
	    var editor = cm.fromTextArea(document.getElementById('code'), {
      mode: 'markdown',
      lineNumbers: true,
      matchBrackets: true,
      lineWrapping: true,
      onChange: update
    });

});
