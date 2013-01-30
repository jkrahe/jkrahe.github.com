function initializeSlider()
{
    var section = $(".section-header h2 a"); 
    var leftIcon = $(".foundicon-left-arrow"); 
    var rightIcon = $(".foundicon-right-arrow"); 
    // console.log($(section));
    leftIcon.bind('mouseover', function()
    {
        $('.hidden.lft.label').removeClass("hidden"); 
    }); 

    leftIcon.bind('mouseout', function()
    {
        $('.lft.label').addClass("hidden"); 
    }); 


    rightIcon.bind('mouseover', function()
    {
        $('.hidden.rght.label').removeClass("hidden"); 
    }); 

    rightIcon.bind('mouseout', function()
    {
        $('.rght.label').addClass("hidden"); 
    });
    
    


    // console.log("this is the click function"); 
    // console.log(this); 
};
