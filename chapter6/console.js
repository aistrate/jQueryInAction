// File: lab.selectors.html (Chapter 2)

$.param($(':radio:checked'))

$.param($('input:text:nth(1)'))


// File lab.$.param.html

$.contains($('div[data-module]'), $(':radio'))

// returns true even if the page doesn't contain an image!
$.contains($('div[data-module]'), $('img'))

// correct way to call $.contains; the two parameters should be elements, not wrapped sets
$.contains($('div[data-module]')[0], $(':radio')[0])

// equivalent (but returns a wrapped set, instead of a boolean)
$('div[data-module]').has(':radio')


var o = {
    id: 'o',
    hello: function() { alert("Hi there! I'm " + this.id); }
};

$('#testButton').click(o.hello)

$('#testButton').click($.proxy(o.hello, o))
$('#testButton').click($.proxy(o, 'hello'))


$.parseJSON('{ "x": 5, "y": 6, "Desc": "Something or other" }')
