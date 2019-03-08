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

$(".projectLink").on("click", function () {
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

$(function () {
    $('.projectModal').on('show.bs.modal', function () {
        $('.portfolioGrid').addClass('blur');
    });

    $('.projectModal').on('hide.bs.modal', function () {
        $('.portfolioGrid').removeClass('blur');
    });
});


const projects = [
    {
        name: 'Popin',
        tags: ['React', 'Express', 'MongoDB', 'APIs', 'React-Router'],
        imgSrc: 'assets/images/popin.png',
        imgAlt: 'poppin app project thumbnail',
        demoUrl: 'https://frozen-bastion-62666.herokuapp.com/',
        gitUrl: 'https://github.com/jmyager/Popin'
    },
    {
        name: "Buzz'd",
        tags: ['JavaScript', 'jQuery', 'Hammerjs', 'Materialize', 'MySql', 'Express', 'Sequelize'],
        imgSrc: 'assets/images/buzzd.png',
        imgAlt: 'buzzd app project thumbnail',
        demoUrl: 'https://fathomless-depths-99227.herokuapp.com/',
        gitUrl: 'https://github.com/jmyager/Buzz-d'
    },
    {
        name: 'Imprompto',
        tags: ['JavaScript', 'jQuery', 'APIs', 'HTML', 'CSS'],
        imgSrc: 'assets/images/imprompto.png',
        imgAlt: 'imprompto app project thumbnail',
        demoUrl: 'https://shreedamin.github.io/imprompto/',
        gitUrl: 'https://github.com/jmyager/ImprompTo'
    },
    {
        name: 'Memory Game',
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        imgSrc: 'assets/images/memory-game.png',
        imgAlt: 'memory game project thumbnail',
        demoUrl: 'https://fathomless-mountain-34042.herokuapp.com/',
        gitUrl: 'https://github.com/jmyager/MemoryGame'
    },
    {
        name: 'Train Schedule',
        tags: ['Firebase', 'jQuery', 'Bootstrap', 'JavaScript'],
        imgSrc: 'assets/images/train-schedule.png',
        imgAlt: 'train schedule project thumbnail',
        demoUrl: 'http://www.joshyager.com/Train-Schedule/',
        gitUrl: 'https://github.com/jmyager/Train-Schedule'
    },
    {
        name: 'Trivia Game',
        tags: ['JavaScript', 'JS Timers', 'JS Functions', 'Bootstrap', 'HTML', 'CSS'],
        imgSrc: 'assets/images/trivia-game.png',
        imgAlt: 'trivia game project thumbnail',
        demoUrl: 'http://www.joshyager.com/TriviaGame/',
        gitUrl: 'https://github.com/jmyager/TriviaGame'
    },
    {
        name: 'Bamazon',
        tags: ['Node.js', 'MySql', 'JavaScript'],
        imgSrc: 'assets/images/bamazon.png',
        imgAlt: 'bamazon app project thumbnail',
        demoUrl: 'https://raw.githubusercontent.com/jmyager/Bamazon_app/master/images/bamazonCustomer.gif',
        gitUrl: 'https://github.com/jmyager/Bamazon_app'
    }
]



// Filter button functions //
// ======================= //
$("ul").on("click", "button", function (event) {
    // counter for project animation
    let counter = 7;
    // array to hold newly filtered projects
    let filteredProjects = [];
    // remove active class from focused button
    $('ul').find('button.filter-active').removeClass()
    // find target that was clicked
    let target = $(event.target);
    // pull filter data value of target
    let filter = $(event.target).data("filter");
    // add active class to parent button (li was clicked)
    target.parent('button').addClass("filter-active");
    // filter all projects based on filter value
    if (filter === "All") {
        filteredProjects = projects;
    }
    else {
    filteredProjects = projects.filter(e => e.tags.includes(filter));
    }
    // fade out and remove all current projects
    // $("figure").each(function(index) {
    //     $(this).delay(200*index).fadeOut(100);
    // });
    $('figure').each(function(index) {
        $(this).fadeOut(200).remove();
    })
    // create template to hold project html
    let projectTemplate = [];
    // loop through filtered projects and add to template
    filteredProjects.forEach(function (project) {
        // loop through our tags and create template html
        let tags = '';
        project.tags.forEach(function (tag) {
            tags+=`
                <p>${tag}</p>
            `;
        })
        // add to project template html
        projectTemplate.push(`
        <figure class="effect-julia">
                        <img src=${project.imgSrc} alt=${project.imgAlt} />
                        <figcaption>
                            <h2>${project.name}</h2>
                            <div>
                                ${tags}
                            </div>
                            <a class="projectLink" data-demo=${project.demoUrl}
                                data-github=${project.gitUrl}>View
                                more
                            </a>
                        </figcaption>
                    </figure>
        `);
    })
    projectTemplate.forEach(function (project) {
            $('#projectWell').append(project);
            $('figure').delay(400*project).fadeIn(300);
   
        // $('#projectWell').append(project);
    })
    // $('#projectWell').delay(200000).hide(0);
    // $('#projectWell').append(projectTemplate);
    // $('#projectWell').delay(2000).fadeIn(200);
    // $('#projectTemplate').child('figure').hide();
    // $('#projectWell').show();
    // console.log(projectTemplate);
    // $('figure').each(function(index) {
    //     $(this).delay(400*index).fadeIn(300);
    // });
})




