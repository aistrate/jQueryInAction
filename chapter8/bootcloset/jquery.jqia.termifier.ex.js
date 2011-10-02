// Solutions to exercises on page 277

(function($){

  $.fn.termifier = function(actionURL,options) {
    var settings = $.extend({
      origin: {top:0,left:0},
      paramName: 'term',
      addClass: null,
      timeout: 0,
      actionURL: actionURL
    },options||{});
    this.click(function(event){
      $('div.termifier').remove();
      $('<div>')
        .addClass('termifier' +
          (settings.addClass ? (' ') + settings.addClass : ''))
        .css({
          position: 'absolute',
          top: event.pageY - settings.origin.top,
          left: event.pageX - settings.origin.left,
          display: 'none'
        })
        // Exercise 3: close popup only when user clicks *outside* it
        .click(function(event){
          event.stopPropagation();
        })
        .appendTo('body')
        .append(
          $('<div>')
          // Exercise 4: primitive error 'handling'
          .html('[Server not found]')
          .load(
            settings.actionURL,
            encodeURIComponent(settings.paramName) + '=' +
              encodeURIComponent($(event.target).text()),
            function(){
              // Exercise 2: timeout option
              var termifier = $(this).closest('.termifier');
              termifier.fadeIn('slow');
              if (settings.timeout > 0) {
                  termifier.delay(settings.timeout)
                           .fadeOut('normal');
              }
            }
          )
        );
    });
    // Exercise 3: close popup only when user clicks *outside* it
    $('body').click(function(){
        $('div.termifier').fadeOut('normal');
    });
    this.addClass('termified');
    return this;
  };

})(jQuery);
