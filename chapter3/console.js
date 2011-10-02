// File: lab.selectors.html (from Chapter 2)


$('ul.myList').css({ backgroundColor: 'Silver' })

$('ul.myList').css({ backgroundColor: function(i, v) { return (v=='rgb(192, 192, 192)' ? 'Gray' : 'Silver'); } })


$('td:nth-child(2)').add('th:nth-child(2)').remove()

$('td:nth-child(2)').add('th:nth-child(2)').width(70).css({ backgroundColor: 'Silver' })
$('td:nth-child(2)').add('th:nth-child(2)').empty()

$('img').clone().insertBefore('#languages').end().end().hide()

$('a[href^="css"]').replaceWith($('img[alt="Hibiscus"]'))

$('img[alt="Hibiscus"]').replaceAll($('a[href^="css"]'))

$('#sampleDOM form [value]').map(function() { return this.value; })

$('[name="checkboxes"]:checked').map(function() { return this.value; })


// not working
$.fn.getChecked = function(cbName) {
    return $('[name="'+cbName+'"]:checked').map(function() { return this.value; }).toArray();
};


// Exercise (page 90)
$.fn.getChecked = function() {
    return this.filter('input[type="checkbox"]:checked')
               .map(function() { return $(this).val(); })
               .toArray();
};

$('form [name="checkboxes"]').getChecked()

$('[name="checkboxes"]:nth(1)').replaceWith('<input type="checkbox" name="checkboxes" id="checkbox2"/>')

$('[name="checkboxes"]:nth(1)').val(7)
