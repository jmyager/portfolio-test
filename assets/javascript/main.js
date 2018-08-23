$("#portfolio", "#about").hide();

$("a").on("click", function () {
    $("#portfolio", "#about").show();
})

$('#scrollBtn').hide();

// Scroll on anchor click
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// When the user scrolls down 20px from the top of the document, show the button
//Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('#scrollBtn').fadeIn();
    } else {
        $('#scrollBtn').fadeOut();
    }
});

// Click event to scroll to top
$('#scrollBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});

$(".projectLink").on("click", function() {
    $("#demoBtn").attr(
        "href",
        $(this).attr("data-demo") 
    );
    $("#githubBtn").attr(
        "href",
        $(this).attr("data-github")
    )

    $(".projectModal").modal("show");
})



