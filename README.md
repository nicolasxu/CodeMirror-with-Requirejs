CodeMirror-with-Requirejs
=========================

It's a basic project to show you how to load CodeMirror in Requirejs

key thing learning:
*1. Don't define module ID for Code Mirror. It will cause wrong path problem.
   e.g.: after defining 'codeMirror': '../path/to/codeMirror', the mode js loader doesn't work properly. 
*2. CodeMirror is already in AMD module, so baseUrl you defined in your requirejs.config() will affect its mode modules.
*3. best way to load CodeMirror in requirejs is just to use the path to mode module relative to baseUrl. 

