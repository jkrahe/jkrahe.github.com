function initializeSlider()
{
    var section = $(".section-header h2 a"); 
    var leftIcon = $(".foundicon-left-arrow"); 
    var rightIcon = $(".foundicon-right-arrow"); 
    // console.log($(section));
    leftIcon.bind('mouseover', function()
    {
        $('.hidden.left').removeClass("hidden"); 
    }); 

    leftIcon.bind('mouseout', function()
    {
        $('.left').addClass("hidden"); 
    }); 


    rightIcon.bind('mouseover', function()
    {
        $('.hidden.right').removeClass("hidden"); 
    }); 

    rightIcon.bind('mouseout', function()
    {
        $('.right').addClass("hidden"); 
    });
    
    


    // console.log("this is the click function"); 
    // console.log(this); 
};
