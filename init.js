/*
* Copyright (c) Codiad & Andr3as, distributed
* as-is and without warranty under the MIT License.
* See [root]/license.md for more information. This information must remain intact.
*/

(function(global, $){
    
    var codiad = global.codiad,
        scripts = document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    $(function() {
        codiad.Emmet.init();
    });

    codiad.Emmet = {
        
        path        : curpath,
        bindKeys    : null,
        
        init: function() {
            var _this       = this;
            //Load emmet script
            $.getScript("components/editor/ace-editor/ext-emmet.js", function() {
                var Emmet = ace.require("ace/ext/emmet");
                $.getScript(_this.path+"emmet.js", function(){
                    Emmet.setCore(window.emmet);
                });
            });
        }
    };
})(this, jQuery);