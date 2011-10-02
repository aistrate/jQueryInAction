// Solutions to (some of) the exercises on page 233

(function($){

  $.fn.photomatic = function(options) {
    var settings = $.extend({
      photoElement: 'img.photomaticPhoto',
      transformer: function(name) {
                     return name.replace(/thumbnail/,'photo');
                   },
      animBefore: $.noop,
      animAfter: $.noop,
      nextControl: null,
      previousControl: null,
      firstControl: null,
      lastControl: null,
      playControl: null,
      delay: 3000
    },options||{});

    // Exercise 2
    // function showPhoto(index) {
    //       $(settings.photoElement)
    //         .fadeTo('normal', 0.0, function() {
    //             $(this).attr('src', settings.transformer(settings.thumbnails$[index].src)); })
    //         .fadeTo('normal', 1.0);
    //       settings.current = index;
    //     }

    // Exercise 3
    function showPhoto(index) {
      $(settings.photoElement)
        .stop(true, true)
        .each(function() { $.proxy(settings.animBefore, this)(); })
        .queue(function() {
            $(this).attr('src', settings.transformer(settings.thumbnails$[index].src));
            $(this).dequeue();
        })
        .delay(20)
        .each(function() { $.proxy(settings.animAfter, this)(); });
        
        settings.current = index;
    }

    settings.current = 0;
    settings.thumbnails$ = this.filter('img');
    settings.thumbnails$
      .each(
        function(n){ $(this).data('photomatic-index',n); }
      )
      .click(function(){
        showPhoto($(this).data('photomatic-index'));
      });

    $(settings.photoElement)
      .attr('title','Click for next photo')
      .css('cursor','pointer')
      .click(function(){
        showPhoto((settings.current+1) % settings.thumbnails$.length);
      });

    $(settings.nextControl).click(function(){
      showPhoto((settings.current+1) % settings.thumbnails$.length);
    });

    $(settings.previousControl).click(function(){
      showPhoto((settings.thumbnails$.length+settings.current-1) %
                settings.thumbnails$.length);
    });

    $(settings.firstControl).click(function(){
      showPhoto(0);
    });

    $(settings.lastControl).click(function(){
      showPhoto(settings.thumbnails$.length-1);
    });

    $(settings.playControl).toggle(
      function(event){
        settings.tick = window.setInterval(
          function(){
              //$(settings.nextControl).triggerHandler('click');
              $(settings.nextControl).click();
          },
          settings.delay);
        $(event.target).addClass('photomatic-playing');
        $(settings.nextControl).click();
      },
      function(event){
        window.clearInterval(settings.tick);
        $(event.target).removeClass('photomatic-playing');
      });

    showPhoto(0);
    return this;
  };

})(jQuery);
