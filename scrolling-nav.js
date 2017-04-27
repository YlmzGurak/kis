$(document).ready(function(){

/**
 * This object controls the nav bar. Implement the add and remove
 * action over the elements of the nav bar that we want to change.
 *
 * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
 */
var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header",
    "header-container",
    "brand",
    "menu",  
]);

/**
 * Function that manage the direction
 * of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
offSetManager();
});



var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 300
    }, 1500, function () {
        window.location.hash = href;
    });
    return true;

});


$(document).ready(function(ev){
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
      $('#custom_carousel .controls li.active').removeClass('active');
      $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })
});

$(function() {
    $("#contact .button").click(function() {
        var data = {
    name: $("#form_name").val(),
    email: $("#form_email").val(),
    message: $("#msg_text").val()
};
$.ajax({
    type: "POST",
    url: "email.php",
    data: data,
    success: function(){
        $('.success').fadeIn(1000);
    }
});

        return false;
    });
});



$(document).ready(function() {
    var $window = $(window);

        // Function to handle changes to style classes based on window width
        function checkWidth() {
        if ($window.width() < 400) {
            $('#header').removeClass('navbar-fixed-top').addClass('navbar-static-top');
            };

        if ($window.width() >= 400) {
            $('#mainContent').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        }
    }
});
