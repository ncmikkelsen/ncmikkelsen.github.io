var hide_lists = function(cb) {
    $('#aboutme').fadeOut(200);
    $('#posts').fadeOut(200);
    $('#projects').fadeOut(200);

    $('#aboutme-btn').removeClass('disabled');
    $('#posts-btn').removeClass('disabled');
    $('#projects-btn').removeClass('disabled')
};
var show_projects = function() {
    $('#aboutme-btn').removeClass('disabled');
    $('#posts-btn').removeClass('disabled');

    $('#aboutme, #posts').fadeOut(200).promise().done(function(){
        $('#projects').fadeIn(200)
    });

    $('#projects-btn').addClass('disabled')
};

var show_posts = function() {
    $('#aboutme-btn').removeClass('disabled');
    $('#projects-btn').removeClass('disabled');

    $('#aboutme, #projects').fadeOut(200).promise().done(function(){
        $('#posts').fadeIn(200)
    });

    $('#posts-btn').addClass('disabled')
};

var show_aboutme = function(){
    $('#posts-btn').removeClass('disabled');
    $('#projects-btn').removeClass('disabled');

    $('#posts, #projects').fadeOut(200).promise().done(function(){
        $('#aboutme').fadeIn(200)
    });

    $('#aboutme-btn').addClass('disabled')
};
