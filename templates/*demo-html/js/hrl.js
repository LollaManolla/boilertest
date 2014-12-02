; // require: jQuery 1.2 or higher
(function($) {

  hrl = function(context) {
    context = context || document;
    $('span.hrl', context).each(function(i, o) {
      $this = $(this);
      var href = dce64($this.attr('rel'));
      var clone = $this.wrap("<div />").parent().html();
      clone = clone.replace(new RegExp('<span', 'i'),"<a");
      clone = clone.replace(new RegExp('/span>$', 'i'),"/a>");
      var $newHtml = $(clone).attr('href', href).attr("rel",""); 
      $this.parent().replaceWith($newHtml);
    });
  };

  var dce64 = function(c64) {
    //return window.atob(c64);
    return Base64.decode(c64);
  };

})(jQuery);
