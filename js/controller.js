(function($){

    function IntervalStorage(){
        var intervalContainer = [];

        return {
            'addInterval': function(min, max){
                intervalContainer.push(new Interval(min, max));
            }
        }
    }

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

    var paper = Snap('#chart'),
        c = paper.circle(10, 20,222);
    c.attr({
        fill: '#FFBB0F'
    });
    c.animate({r: 300}, 1500, mina.bounce);

    // рисуем оси координатной плоскости
    var xAxis = paper.path('M5,150');
    xAxis.attr({
        stroke: '#000',
        strokeWidth: 0.5
    });
    xAxis.animate({d:'M5,150L450,150 || M5,150L-450,150 || M450,150L445,145 || M450,150L445,155'}, 1000, mina.easeinout);

    var yAxis = paper.path('M25,150');
    yAxis.attr({
        stroke: '#000',
        strokeWidth:.5
    });
    yAxis.animate({d:'M25,150L25,15 || M25,15L20,20 || M25,15L30,20  || M25,150L25,285'}, 1000, mina.easeinout);

    xAxisText = paper.text(435,175, 'X');
    xAxisText.attr({
        'font-size':'14px'
    });
    yAxisText = paper.text(40,30, 'Y');
    yAxisText.attr({
        'font-size':'14px'
    });
    //////////////////////////////////////



    //тестовый комит
    //sfsfsfs
})(jQuery);