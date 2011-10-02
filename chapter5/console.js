// File: lab.effects.html

$('div#testSubjects *').stop(false, true)


$.fn.fadeToggle = function(speed){
    return this.animate({opacity:'toggle'},speed);
};

$(".testSubject").fadeToggle(1500)


$('.testSubject').each(function(){
    $(this).animate({
            width: $(this).width() * 2,
            height: $(this).height() * 2
        },
        2000
    );
});

$('.testSubject').each(function(){
    $(this).animate({
            width: $(this).width() / 2,
            height: $(this).height() / 2
        },
        2000
    );
});


$('.testSubject:nth(1)').each(function(){
    $(this)
        .css('position','relative')
        .animate(
            {
                opacity: 0,
                top: $(window).height() - $(this).height() -
                     $(this).position().top
            },
            'slow',
            function(){ $(this).hide(); }
        );
});

$('.testSubject:nth(1)').each(function(){
    $(this)
        .css('position','relative')
        .animate(
            {
                opacity: 'hide',
                top: $(window).height() - $(this).height() -
                     $(this).position().top
            },
            'slow'
        );
});


$('#testSubject').css({ position: 'relative' })


$('img:first').queue('q1', function() { alert('A'); })

$('img:first').queue('q1', function() { say('A'); $(this).dequeue('q1'); })
$('img:first').queue('q1', function() { say('B'); $(this).dequeue('q1'); })
$('img:first').queue('q1', function() { say('C'); $(this).dequeue('q1'); })
$('img:first').dequeue('q1');


$('img:first').queue('fx', function() { say('Ready'); $(this).dequeue(); })
