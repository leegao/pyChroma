/*
* Chroma-Hash : A sexy, non-reversable live visualization of password field input
* http://github.com/mattt/Chroma-Hash/
*
* Copyright (c) 2009 Mattt Thompson
* Licensed under the MIT licenses.
*/
 
(function($){
  $.fn.extend({
    chromaHash: function(options) {
    
      var defaults = {
          number: 3
      };
 
      var options = $.extend(defaults, options);
 
      return this.each(function() {
        
        var o = options;
        var obj = $(this);
      
 
        if(o.number < 1 || o.number > 4) {
          console.log("[Warning] Chroma-Hash expects a number parameter between 1 and 4, given " + o.number);
        }
 
        var colors = ["primary", "secondary", "tertiary", "quaternary"].slice(0, o.number);
 
        var chromaHashesForElement = function(e) {
          id = $(e).attr('id');
          return $("label.chroma-hash").filter(function(l) {
                      return $(this).attr('for') == id;
                  });
        };
 
        obj.each(function(e) {
          for(c in colors) {
            $(this).after('<label for="' + $(this).attr('id') + '" class="' + colors[c] + ' chroma-hash"></label>');
          }
 
          $(this).keyup(function(e){
            if($(this).val() == ""){
              chromaHashesForElement(this).animate({backgroundColor: "#ffffff"});
              return;
            }
            height = $(this).height();
            position = $(this).position();
            width = $(this).outerWidth();
 
            chromaHashesForElement(this).each(function(i) {
              $(this).css({position: 'absolute',
                           left: position.left + width - 2,
                           top: position.top,
                           height: height + "px",
                           width: 8 + "px",
                           margin: 5 + "px",
                           marginLeft: -8 * (i + 1) + "px"
                          }
                    );
              });
          
              var id = $(this).attr('id');
              var val = $(this).val();
              var salt = %s;
              var hash = %s(val, salt);
              var colors = hash.match(/([\dABCDEF]{6})/ig);
              $(".chroma-hash").stop();
 
              chromaHashesForElement(this).each(function(i) {
                $(this).animate({backgroundColor:"#" + colors[i]});
              });
            });
          });
        
        });
      }
    });
})(jQuery);