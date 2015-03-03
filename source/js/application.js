var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../slides.json',
        'dataType': "json",
        'success': function (data) {
            json = data.slides;
        }
    });
    return json;
})();

$(function($){
  $.supersized({
    slide_interval : 7000, // Length between transitions
    transition : 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition_speed : 600,    // Speed of transition
    slide_links : 'blank',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
    random: 1,
    fit_always: 1,
    fit_portrait: 1,
    fit_landscape: 1,
    vertical_center: 1,
    horizontal_center: 1,
    image_protect: 1,
    slides: json
  });
});
