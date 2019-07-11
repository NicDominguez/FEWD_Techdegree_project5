// Calling Light Gallery Plugin

$('document').ready(function () {
    $('#lightgallery').lightGallery({
        //Plugin Options here,
        width: '60%',
        backdropDuration: 300,
        preload: 2,
        subHtmlSelectorRelative: true,
    });
});

// Calling LiveSearchPlugin

$('document').ready(function () {
    $('.filter-container').filterizr({
        //Plugin Options here,
        gutterPixels: 50,
    });
});