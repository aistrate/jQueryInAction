// (function($){
//   $.fn.setReadOnly = function(readonly) {
//     return this.filter('input:text')
//       .attr('readOnly',readonly)
//       .css('opacity', readonly ? 0.5 : 1.0)
//       .end();
//   };
// })(jQuery);


// Exercise: first try
(function($){
  $.fn.setReadOnly = function(readonly, setRO, setRW) {
    setRO = setRO ? setRO : function() { $(this).css('opacity', 0.5); };
    setRW = setRW ? setRW : function() { $(this).css('opacity', 1.0); };
    return this.filter('input:text')
      .attr('readOnly',readonly)
      .each(function() { if (readonly) setRO.call(this); else setRW.call(this); })
      .end();
  };
})(jQuery);

// Tests
// $('#billingAddress input').setReadOnly(true, function() { $(this).css('opacity', 0.5); });
// $('#billingAddress input').setReadOnly(true, function() { $(this).css('color', 'Red'); });


// Exercise: second try
// (function($){
//   $.fn.setReadOnly = function(readonly, setRO, setRW) {
//     setRO = setRO ? setRO : function(elem) { $(elem).css('opacity', 0.5); };
//     setRW = setRW ? setRW : function(elem) { $(elem).css('opacity', 1.0); };
//     return this.filter('input:text')
//       .attr('readOnly',readonly)
//       .each(function() { if (readonly) setRO(this); else setRW(this); })
//       .end();
//   };
// })(jQuery);

// Tests
// $('#billingAddress input').setReadOnly(true, function(elem) { $(elem).css('opacity', 0.5); });
// $('#billingAddress input').setReadOnly(true, function(elem) { $(elem).css('color', 'Red'); });
