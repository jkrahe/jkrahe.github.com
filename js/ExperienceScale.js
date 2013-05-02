
// top left div
var div1 = $('#experience .eight.columns.first').mouseenter(function()
{ 
    // cool trick for getting integers even if the value is auto
    // var z = ~~$(this).css('zIndex')
    $(this).css({'z-index' : '5'}); 
    $(this).animate({
        transform: 'translateX(200px) translateY(100px) scale(1.5)', 
        backgroundColor : 'rgba(73, 102,0,1)'
    }); 
    }).mouseleave(function()
    { 
        $(this).animate({
            z:0,
            transform: 'translateX(0px) translateY(0px) scale(1)',
            backgroundColor : 'rgba(73, 102,0,0.2)'
        }, function(){
            $(this).css({'z-index' : '1'}); 
        });

    });

    // top right div
    var div1 = $('#experience .eight.columns.second').mouseenter(function()
    { 
        // cool trick for getting integers even if the value is auto
        // var z = ~~$(this).css('zIndex')
        $(this).css({'z-index' : '5'}); 
        $(this).animate({
            transform: 'translateX(-200px) translateY(100px) scale(1.5)', 
            backgroundColor : 'rgba(73, 102,0,1)'
        });
    }).mouseleave(function()
    {
        $(this).animate({
            z:0,
            transform: 'translateX(0px) translateY(0px) scale(1)',
            backgroundColor : 'rgba(73, 102,0,0.2)'
        }, function(){
            $(this).css({'z-index' : '1'}); 
        });

    });


    // bottom left div
    var div1 = $('#experience .eight.columns.third').mouseenter(function()
    { 
        // cool trick for getting integers even if the value is auto
        // var z = ~~$(this).css('zIndex')
        $(this).css({'z-index' : '5'}); 
        $(this).animate({
            transform: 'translateX(200px) translateY(-100px) scale(1.5)', 
            backgroundColor : 'rgba(73, 102,0,1)'
        }); 
    }).mouseleave(function()
    {
        $(this).animate({
            z:0,
            transform: 'translateX(0px) translateY(0px) scale(1)',
            backgroundColor : 'rgba(73, 102,0,0.2)'
        }, function(){
            $(this).css({'z-index' : '1'}); 
        });

    });


    // bottom right div
    var div1 = $('#experience .eight.columns.fourth').mouseenter(function()
    { 
        // cool trick for getting integers even if the value is auto
        // var z = ~~$(this).css('zIndex')
        $(this).css({'z-index' : '5'});
        // $(this).css({'background-color' : "rgba(123,178,0, 0.7)"}) 
        $(this).animate({
            transform: 'translateX(-200px) translateY(-100px) scale(1.5)', 
            backgroundColor : 'rgba(73, 102,0,1)'
        });
        // figure out some other time
        
        // $("html, body").animate({ scrollTop: $(this).offset().top-($(this).height()+200)}, 500);
        // console.log("the top of the scroll: ", $('#experience .eight.columns.fourth').offset().top-$('#experience .eight.columns.fourth').height()+100); 

    }).mouseleave(function()
    {
        $(this).animate({
            z:0,
            transform: 'translateX(0px) translateY(0px) scale(1)',
            backgroundColor : 'rgba(123, 178,0,0.2)'
            // $(this).css({'background-color' : "rgba(123,178,0, 0.2)"}) 
        }, function(){
            
            $(this).css({'z-index' : '1'}); 
            
        });

    });
