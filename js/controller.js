(function($){
    var $addBtn = $('.addButton'),
        $gallery = $('.interval-gallery'),
        $minInput = $('.minInput'),
        $maxInput = $('.maxInput');

    $addBtn.on('click',function(e){
        e.preventDefault();

        var min = $minInput.val(),
            max = $maxInput.val(),
            $li = $('<li>',{'class':'gallery-item','data-min': min, 'data-max': max});

        $li.prependTo($gallery);
    });
})(jQuery);