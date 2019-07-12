//LIGHT GALLERY PLUGIN

$('document').ready(function () {
    $('#lightgallery').lightGallery({
        //Plugin Options here,
        width: '100%',
        backdropDuration: 300,
        preload: 2,
        subHtmlSelectorRelative: true,
    });
});

//SEARCH FUNCTION

//Creates object literal of each media query width and associated gallery box flex basis value
const flexAmount = {
    'small': '350',
    'medium': '600',
    'large': '800',
};
let flexBasis = "";

function getFlexBasis(){
    //gets the width of the viewport
    const windowWidth = $(window).width();

    if (windowWidth < flexAmount.small) {
        flexBasis = '100%';
    } else if (windowWidth < flexAmount.medium) {
        flexBasis = '45%';
    } else if (windowWidth < flexAmount.large) {
        flexBasis = '28%';
    } else {
        flexBasis = '20%';
    }
}

//get search input element
const searchBox = $("input[name='filtr-search']");
//creates object literal of each gallery box elements
const imageBox = $('.gallery__box');
//creates object literal of each caption
const photoCaptions = $('.caption p');
//creates blank array for store captions
const captionArray = [];
//creats blank flexB basis string



//loops through captions object literal and sets pushes textContent to captionArray
$(photoCaptions).each(function(index){  
    captionArray.push(photoCaptions[index].textContent)
})


//Maintains flex basis on window resize
$(window).on("resize", function(){
    getFlexBasis()
    $(imageBox).each(function () {
        if ($(this).css("flex-basis") !== "0px") {
            $(this).css({ "flex-basis": flexBasis, "margin": "2.5%", "overflow": "visable"})
        }
    })    
})


//run when keyup in search box
$(searchBox).on("keyup", function() {
    //gets user search input
    const searchText = searchBox.val().toLowerCase()
    //show all gallery boxes again on new keyup
    getFlexBasis()
    $(imageBox).css({ "flex-basis": flexBasis, "margin": "2.5%", "overflow": "visable"})

    //loop through captions array 
    $(captionArray).each(function (index) {
        //check search input variable against captions
        if (this.indexOf(searchText) <= -1) {
            //hide image if not does not include search text
            $(imageBox[index]).css({"flex-basis": "0px", "margin": "2.5% 0", "overflow": "hidden"})
        }
    })
})


