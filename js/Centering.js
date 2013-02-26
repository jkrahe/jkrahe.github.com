// awesome centering technique
var secMarDiff = -1*($('.section-header').width()/2); 
var navMarDiff = -1*($('.navbar').width()/2); 
var footMarDiff = -1*($('.footer').width()/2); 
var resumeMarDiff = -1*($('div.resume').width()/2); 

$('.navbar').css('margin-left', navMarDiff); 
$('.section-header').css('margin-left', secMarDiff); 
$('.resume').css('margin-left', resumeMarDiff); 
$('.footer').css('margin-left', footMarDiff);
